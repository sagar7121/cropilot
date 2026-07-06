import * as cheerio from "cheerio";
import { ProductEvidence } from "@/types/audit";
import { extractStructuredProducts } from "./extractStructuredData";

export function extractProducts(html: string): ProductEvidence[] {
  // Try Structured Data first
  const structuredProducts = extractStructuredProducts(html);

  if (structuredProducts.length > 0) {
    return structuredProducts.slice(0, 10).map((product) => ({
      title: product.title,
      price: product.price ? `$${product.price}` : "",
      compareAtPrice: "",
      rating: product.rating,
      reviewCount: product.reviewCount,
      availability: product.availability,
      primaryCTA: "View Product",
      image: product.image,
    }));
  }

  // Fallback to HTML scraping
  const $ = cheerio.load(html);

  const products: ProductEvidence[] = [];
  const seen = new Set<string>();

  $(
    ".product-card, .grid-product, .card, .product, .product-item, [class*='product']"
  ).each((_, element) => {
    // Product Title
    const title = $(element)
      .find("h1,h2,h3,h4,.product-title,.card__heading,.card__title")
      .first()
      .text()
      .trim();

    if (!title || seen.has(title)) return;

    seen.add(title);

    // Raw Price Text
    const rawPrice = $(element)
      .find(".money,.price,[class*='price']")
      .first()
      .text()
      .replace(/\s+/g, " ")
      .trim();

    // Extract all prices
    const allPrices = rawPrice.match(/\$\d+(\.\d{2})?/g) || [];

// Remove duplicate prices
const uniquePrices = [...new Set(allPrices)];

const price = uniquePrices[0] || "";

const compareAtPrice =
  uniquePrices.length > 1 ? uniquePrices[1] : "";
    // CTA
    const button = $(element).find("button").first();

    const primaryCTA =
      button.clone().children().remove().end().text().trim() ||
      $(element).find("a.button").first().text().trim() ||
      "View Product";

    // Product Image
    const image =
      $(element).find("img").first().attr("src") ||
      $(element).find("img").first().attr("data-src") ||
      "";

    products.push({
      title,
      price,
      compareAtPrice,
      rating: "",
      reviewCount: "",
      availability: "",
      primaryCTA,
      image,
    });
  });

  return products.slice(0, 10);
}