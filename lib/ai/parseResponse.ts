export function parseGeminiResponse(response: string) {
  try {
    // Remove markdown code fences if Gemini returns them
    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return {
      overallScore: parsed.overallScore ?? 0,

      summary:
        parsed.summary ??
        "No executive summary was generated.",

      strengths: parsed.strengths ?? [],

      weaknesses: parsed.weaknesses ?? [],

      quickWins: parsed.quickWins ?? [],

      estimatedConversionLift:
        parsed.estimatedConversionLift ?? "Unknown",

      finalVerdict:
        parsed.finalVerdict ??
        "No final verdict provided.",

      opportunities: parsed.opportunities ?? [],
    };
  } catch (error) {
  console.error("Gemini Parse Error:", error);

  return {
    overallScore: 0,
    summary: "Unable to parse AI response.",
    strengths: [],
    weaknesses: [],
    quickWins: [],
    estimatedConversionLift: "Unknown",
    finalVerdict: "Parsing failed.",
    opportunities: [],
  };
}
}