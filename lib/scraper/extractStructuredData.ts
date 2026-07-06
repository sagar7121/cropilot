import * as cheerio from "cheerio";

export interface StructuredProduct {
  title: string;
  price: string;
  image: string;
  rating?: string;
  reviewCount?: string;
  availability?: string;
}

export function extractStructuredProducts(
  html: string
): StructuredProduct[] {
  const $ = cheerio.load(html);

  const products: StructuredProduct[] = [];

  $('script[type="application/ld+json"]').each((_, script) => {
    try {
      const json = JSON.parse($(script).html() || "");

      const items = Array.isArray(json) ? json : [json];

      items.forEach((item) => {
        if (!item) return;

        if (item["@type"] === "Product") {
          products.push({
            title: item.name || "",

            price:
              item.offers?.price?.toString() ||
              item.offers?.lowPrice?.toString() ||
              "",

            image: Array.isArray(item.image)
              ? item.image[0]
              : item.image || "",

            rating:
              item.aggregateRating?.ratingValue?.toString() || "",

            reviewCount:
              item.aggregateRating?.reviewCount?.toString() || "",

            availability:
              item.offers?.availability || "",
          });
        }
      });
    } catch {
      // Ignore malformed JSON-LD blocks
    }
  });

  return products;
}