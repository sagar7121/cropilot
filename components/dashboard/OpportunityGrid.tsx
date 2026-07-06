import OpportunityCard from "./OpportunityCard";

interface Opportunity {
  title: string;
  evidence: string;
  impact: "High" | "Medium" | "Low";
  confidence: number;
  effort: "Low" | "Medium" | "High";
  recommendation: string;
}

interface OpportunityGridProps {
  opportunities: Opportunity[];
}

export default function OpportunityGrid({
  opportunities,
}: OpportunityGridProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">
          CRO Opportunities
        </h2>

        <p className="mt-2 text-gray-400">
          AI-generated recommendations prioritized by impact,
          confidence, and implementation effort.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.title}
            title={opportunity.title}
            evidence={opportunity.evidence}
            impact={opportunity.impact}
            confidence={opportunity.confidence}
            effort={opportunity.effort}
            recommendation={opportunity.recommendation}
          />
        ))}
      </div>
    </section>
  );
}