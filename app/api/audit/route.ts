import { NextRequest, NextResponse } from "next/server";

import { fetchWebsite } from "@/lib/scraper/fetchWebsite";
import { extractHomepage } from "@/lib/scraper/extractHomepage";
import { extractCollections } from "@/lib/scraper/extractCollections";
import { extractProducts } from "@/lib/scraper/extractProducts";

import { gemini } from "@/lib/ai/gemini";
import { buildPrompt } from "@/lib/ai/buildPrompt";
import { parseGeminiResponse } from "@/lib/ai/parseResponse";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Fetch website
    const html = await fetchWebsite(url);

    // Extract evidence
    const homepage = extractHomepage(html);
    const collections = extractCollections(html);
    const products = extractProducts(html);

    const siteEvidence = {
      homepage,
      collections,
      products,
      cart: null,
    };

    // Build prompt
    const prompt = buildPrompt(siteEvidence);

    // Ask Gemini
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const aiResponse = response.text ?? "";

    const audit = parseGeminiResponse(aiResponse);

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