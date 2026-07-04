export interface AuditResponse {
  store: {
    url: string;
    name: string;
  };

  overallScore: number;

  summary: string;

  opportunities: Opportunity[];
}

export interface Opportunity {
  id: number;

  title: string;

  category: string;

  impact: "High" | "Medium" | "Low";

  confidence: number;

  effort: "Low" | "Medium" | "High";

  priorityScore: number;

  evidence: string[];

  recommendation: string;

  experiment: {
    hypothesis: string;

    primaryMetric: string;

    secondaryMetric: string;
  };
}