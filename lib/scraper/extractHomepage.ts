import * as cheerio from "cheerio";
import { HomepageEvidence } from "@/types/audit";

export function extractHomepage(html: string): HomepageEvidence {
  const $ = cheerio.load(html);

  const title = $("title").text().trim();

  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() || "";

  // Hero Heading
  const heroHeading =
    $("main h1").first().text().trim() ||
    $("section h1").first().text().trim() ||
    $("h1").first().text().trim();

  // Hero Sub Heading
  const heroSubHeading =
    $("main h2").first().text().trim() ||
    $("section p").first().text().trim() ||
    "";

  // Primary CTA
  const primaryCTA =
    $("main a.button")
      .first()
      .text()
      .trim() ||
    $("main button")
      .first()
      .text()
      .trim() ||
    $("a.btn")
      .first()
      .text()
      .trim() ||
    "";

  // Secondary CTA
  const secondaryCTA =
    $("main a.button")
      .eq(1)
      .text()
      .trim() ||
    $("main button")
      .eq(1)
      .text()
      .trim() ||
    "";

  // Announcement Bar
  const announcementBar =
    $(".announcement-bar").text().trim() ||
    $(".announcement").text().trim() ||
    $('[class*="announcement"]').text().trim() ||
    "";

  // Navigation
  const navigationLinks: string[] = [];

  $("nav a").each((_, el) => {
    const text = $(el).text().trim();

    if (text && !navigationLinks.includes(text)) {
      navigationLinks.push(text);
    }
  });

  // Trust Signals
  const trustSignals: string[] = [];

  const pageText = $("body").text();

  const keywords = [
    "Free Shipping",
    "Free Returns",
    "Secure Checkout",
    "Money Back",
    "Trusted",
    "Fast Delivery",
    "30-Day",
    "Guaranteed",
    "SSL",
    "Visa",
    "Mastercard",
    "PayPal",
    "Apple Pay",
    "Google Pay",
  ];

  keywords.forEach((keyword) => {
    if (
      pageText.toLowerCase().includes(keyword.toLowerCase())
    ) {
      trustSignals.push(keyword);
    }
  });

  return {
    title,
    metaDescription,
    heroHeading,
    heroSubHeading,
    primaryCTA,
    secondaryCTA,
    announcementBar,
    navigationLinks,
    trustSignals,
  };
}