import SummaryCard from "@/components/dashboard/SummaryCard";
import OpportunityCard from "@/components/dashboard/OpportunityCard";
import { mockAudit } from "@/lib/mockAudit";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-10 space-y-8">
      <SummaryCard
        score={mockAudit.score}
        summary={mockAudit.summary}
      />

      {mockAudit.opportunities.map((opportunity) => (
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
    </main>
  );
}