export const mockAudit = {
  score: 82,

  summary:
    "This Shopify store has strong branding but misses several high-impact conversion opportunities across product pages and the cart experience.",

  opportunities: [
    {
      title: "Improve Product Page CTA",

      evidence:
        "Primary call-to-action button appears below the fold on most product pages.",

      impact: "High" as const,

      confidence: 92,

      effort: "Low" as const,

      recommendation:
        "Move the CTA above the fold beside pricing and product variants.",
    },

    {
      title: "Display Reviews Above the Fold",

      evidence:
        "Customer reviews appear only after users scroll significantly.",

      impact: "High" as const,

      confidence: 88,

      effort: "Medium" as const,

      recommendation:
        "Show product ratings and review count near the product title.",
    },
  ],
};