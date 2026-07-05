import { SiteEvidence } from "@/types/audit";

export function buildPrompt(site: SiteEvidence) {
  return `
You are an expert Ecommerce Conversion Rate Optimization (CRO) consultant.

Analyze the following Shopify homepage evidence.

Only use the evidence provided.
Do not invent information.

Homepage Evidence:

Title:
${site.homepage.title}

Meta Description:
${site.homepage.metaDescription}

Hero Heading:
${site.homepage.heroHeading}

Primary CTA:
${site.homepage.primaryCTA}

Announcement Bar:
${site.homepage.announcementBar}

Navigation Links:
${site.homepage.navigationLinks.join(", ")}

Products (Top 8):
${site.products
  .slice(0, 8)
  .map((product) => `${product.title} | ${product.price} | ${product.primaryCTA}`)
  .join("\n")}
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