import * as cheerio from "cheerio";
import { CollectionEvidence } from "@/types/audit";

export function extractCollections(
  html: string
): CollectionEvidence[] {
  const $ = cheerio.load(html);

  const collections = $("nav a")
    .map((_, element) => ({
      title: $(element).text().trim(),
      productCount: 0,
    }))
    .get()
    .filter(
      (collection) =>
        collection.title.length > 0 &&
        collection.title.length < 40
    );

  return collections;
}