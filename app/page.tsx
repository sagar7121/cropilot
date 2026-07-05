"use client";

import { useState } from "react";

import Hero from "@/components/landing/Hero";
import SummaryCard from "@/components/dashboard/SummaryCard";
import OpportunityCard from "@/components/dashboard/OpportunityCard";

export default function Home() {
  const [audit, setAudit] = useState<any>(null);

  return (
    <main className="min-h-screen bg-black">
      <Hero onAuditGenerated={setAudit} />

      {audit && (
        <section className="mx-auto mt-12 max-w-6xl space-y-8 px-6 pb-20">
          <SummaryCard
            score={audit.overallScore}
            summary={audit.summary}
          />

          {audit.opportunities.map((opportunity: any) => (
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
        </section>
      )}
    </main>
  );
}