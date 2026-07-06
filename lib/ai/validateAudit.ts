export function validateAudit(audit: any) {
  return {
    overallScore:
      typeof audit.overallScore === "number"
        ? audit.overallScore
        : 0,

    summary:
      audit.summary ||
      "No summary generated.",

    strengths:
      Array.isArray(audit.strengths)
        ? audit.strengths
        : [],

    weaknesses:
      Array.isArray(audit.weaknesses)
        ? audit.weaknesses
        : [],

    quickWins:
      Array.isArray(audit.quickWins)
        ? audit.quickWins
        : [],

    estimatedConversionLift:
      audit.estimatedConversionLift ||
      "Unknown",

    finalVerdict:
      audit.finalVerdict ||
      "No verdict generated.",

    opportunities:
      Array.isArray(audit.opportunities)
        ? audit.opportunities
        : [],
  };
}