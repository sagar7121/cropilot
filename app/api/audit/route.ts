import { NextRequest, NextResponse } from "next/server";

import { fetchWebsite } from "@/lib/scraper/fetchWebsite";
import { extractHomepage } from "@/lib/scraper/extractHomepage";

import { gemini } from "@/lib/ai/gemini";
import { buildPrompt } from "@/lib/ai/buildPrompt";

import { parseGeminiResponse } from "@/lib/ai/parseResponse";

export async function POST(request: NextRequest) {
  try {
    // Read request body
    const { url } = await request.json();

    // Fetch website HTML
    const html = await fetchWebsite(url);

    // Extract homepage evidence
    const homepage = extractHomepage(html);

    // Build AI prompt
    const prompt = buildPrompt(homepage);

    // Ask Gemini for a CRO audit
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    // Get AI response text
    const aiResponse = response.text ?? "";

    const audit = parseGeminiResponse(aiResponse);

    // Return everything
    return NextResponse.json({
  success: true,
  audit,
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