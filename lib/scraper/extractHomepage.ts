import * as cheerio from "cheerio";
import { HomepageEvidence } from "@/types/audit";

export function extractHomepage(html: string): HomepageEvidence {
  const $ = cheerio.load(html);

  const announcementBar =
  $('[class*="announcement"]').first().text().trim() ||
  $('[class*="promo"]').first().text().trim() ||
  $('[class*="banner"]').first().text().trim() ||
  "";

  const navigationLinks = $("nav a")
  .map((_, el) => $(el).text().trim())
  .get()
  .filter((text) => text.length > 0)
  .slice(0, 10);
  // Find the best CTA
  const primaryCTA =
    $("button")
      .filter((_, el) => $(el).text().trim().length > 0)
      .first()
      .text()
      .trim() ||
    $("a")
      .filter((_, el) => {
        const text = $(el).text().trim().toLowerCase();

        return (
          text.includes("shop") ||
          text.includes("buy") ||
          text.includes("add") ||
          text.includes("view")
        );
      })
      .first()
      .text()
      .trim();

  return {
  title: $("title").text().trim(),

  metaDescription:
    $('meta[name="description"]').attr("content")?.trim() || "",

  heroHeading: $("h1").first().text().trim(),

  primaryCTA,

announcementBar,

navigationLinks,

trustSignals: [],
};
}