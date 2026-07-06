import { SiteEvidence } from "@/types/audit";

export function buildPrompt(evidence: SiteEvidence): string {
  return `
You are a Senior Shopify Conversion Rate Optimization (CRO) Consultant.

Your job is to audit a Shopify store using ONLY the provided evidence.

Do NOT invent information.

Return ONLY valid JSON.

--------------------------------------------------
WEBSITE EVIDENCE
--------------------------------------------------

${JSON.stringify(evidence, null, 2)}

--------------------------------------------------
TASK
--------------------------------------------------

Analyze the homepage and produce a CRO report.

Evaluate:

• Visual hierarchy
• Hero section
• Value proposition
• CTA effectiveness
• Navigation
• Product presentation
• Pricing clarity
• Trust signals
• Social proof
• Mobile friendliness (only if evidence exists)
• Overall purchase journey

--------------------------------------------------
RETURN JSON ONLY
--------------------------------------------------

{
  "overallScore": number,

  "summary": "...",

  "strengths": [
    "...",
    "...",
    "..."
  ],

  "weaknesses": [
    "...",
    "...",
    "..."
  ],

  "quickWins": [
    "...",
    "...",
    "..."
  ],

  "estimatedConversionLift": "5-10%",

  "finalVerdict": "...",

  "opportunities":[
    {
      "title":"",
      "category":"",
      "impact":"High|Medium|Low",
      "confidence":95,
      "effort":"Low|Medium|High",
      "evidence":"",
      "recommendation":""
    }
  ]
}

Rules:

- Return JSON only.
- No markdown.
- No explanations.
- Maximum 5 opportunities.
- Base every recommendation on the provided evidence.
- If evidence is missing, explicitly say so instead of making assumptions.
`;
}