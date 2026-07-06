import { NextRequest, NextResponse } from "next/server";

import { fetchWebsite } from "@/lib/scraper/fetchWebsite";
import { extractHomepage } from "@/lib/scraper/extractHomepage";
import { extractCollections } from "@/lib/scraper/extractCollections";
import { extractProducts } from "@/lib/scraper/extractProducts";

import { gemini } from "@/lib/ai/gemini";
import { buildPrompt } from "@/lib/ai/buildPrompt";
import { parseGeminiResponse } from "@/lib/ai/parseResponse";
import { extractShopifyData } from "@/lib/scraper/extractShopifyData";

import { validateAudit } from "@/lib/ai/validateAudit";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Fetch website
    const html = await fetchWebsite(url);

    // Extract evidence
    const homepage = extractHomepage(html);
    const collections = extractCollections(html);
    const products = extractProducts(html);

    const shopifyData = extractShopifyData(html);
    

    const siteEvidence = {
  homepage,
  collections,
  products,
  cart: null,
  footer: null,
  newsletter: null,
};

    // Build prompt
    const prompt = buildPrompt(siteEvidence);

    // Ask Gemini
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const aiResponse = response.text ?? "";

    const parsedAudit = parseGeminiResponse(aiResponse);

const audit = validateAudit(parsedAudit);

console.log("Validated Audit:", audit);
    console.log("Parsed Audit:", audit);

    return NextResponse.json({
  success: true,

  audit,

  stats: {
    products: products.length,
    collections: collections.length,
    opportunities: audit.opportunities.length,
    navigationLinks: homepage.navigationLinks.length,
    trustSignals: homepage.trustSignals.length,
  },

  evidence: {
    homepage,
    collections,
    products,
  },
});
return NextResponse.json({
  success: true,

  version: "1.0.0",

  audit,

  ai: {
    model: "gemini-2.5-flash",
    generatedAt: new Date().toISOString(),
  },

  stats: {
    products: products.length,
    collections: collections.length,
    opportunities: audit.opportunities.length,
    navigationLinks: homepage.navigationLinks.length,
    trustSignals: homepage.trustSignals.length,
  },

  evidence: {
    homepage,
    collections,
    products,
  },
});
  } catch (error) {
    console.error("Audit Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate CRO audit.",
      },
      {
        status: 500,
      }
    );
  }
}