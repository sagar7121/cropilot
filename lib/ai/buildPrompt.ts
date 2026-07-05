export function buildPrompt(homepage: {
  title: string;
  metaDescription: string;
  heroHeading: string;
  primaryCTA: string;
  announcementBar: string;
  navigationLinks: string[];
}) {
  return `
You are an expert Ecommerce Conversion Rate Optimization (CRO) consultant.

Analyze the following Shopify homepage evidence.

Only use the evidence provided.
Do not invent information.

Homepage Evidence:

Title:
${homepage.title}

Meta Description:
${homepage.metaDescription}

Hero Heading:
${homepage.heroHeading}

Primary CTA:
${homepage.primaryCTA}

Announcement Bar:
${homepage.announcementBar}

Navigation Links:
${homepage.navigationLinks.join(", ")}

Generate a CRO audit.

Return ONLY valid JSON in this format:

{
  "overallScore": number,
  "summary": string,
  "opportunities": [
    {
      "title": string,
      "category": string,
      "impact": "High" | "Medium" | "Low",
      "confidence": number,
      "effort": "Low" | "Medium" | "High",
      "evidence": string,
      "recommendation": string
    }
  ]
}
`;
}