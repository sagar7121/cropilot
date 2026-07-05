import * as cheerio from "cheerio";
import { ProductEvidence } from "@/types/audit";

export function extractProducts(html: string): ProductEvidence[] {
  const $ = cheerio.load(html);

  const products: ProductEvidence[] = [];
  const seen = new Set<string>();

  $("main-product").each((_, el) => {
    const card = $(el);

    let title =
      card.find(".text-body a").first().text().trim() ||
      card.find("a.line-clamp-2").first().text().trim() ||
      card.find("[href*='/products/']").last().text().trim();

    title = title.replace(/\s+/g, " ").trim();

    if (!title || seen.has(title)) return;

    seen.add(title);

    let price = "";

    card.find("span").each((_, span) => {
      const txt = $(span).text().trim();

      if (/^\$\d+(\.\d{2})?$/.test(txt) && !price) {
        price = txt;
      }
    });

    let cta = "View Product";

    const button = card.find("button").first().text().trim();

    if (/add to bag/i.test(button))
      cta = "Add to Bag";
    else if (/choose shade/i.test(button))
      cta = "Choose Shade";

    products.push({
      title,
      price,
      primaryCTA: cta,
    });
  });

  return products.slice(0, 10);
}