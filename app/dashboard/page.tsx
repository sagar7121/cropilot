"use client";

import { useEffect, useState } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPIGrid from "@/components/dashboard/KPIGrid";
import SummaryCard from "@/components/dashboard/SummaryCard";
import OpportunityGrid from "@/components/dashboard/OpportunityGrid";
import EvidencePanel from "@/components/dashboard/EvidencePanel";
import ProductPanel from "@/components/dashboard/ProductPanel";
import CollectionPanel from "@/components/dashboard/CollectionPanel";
import PriorityPanel from "@/components/dashboard/PriorityPanel";
import ScoreSection from "@/components/dashboard/ScoreSection";

import StrengthsCard from "@/components/dashboard/StrengthsCard";
import WeaknessesCard from "@/components/dashboard/WeaknessesCard";
import QuickWinsCard from "@/components/dashboard/QuickWinsCard";
import ConversionLiftCard from "@/components/dashboard/ConversionLiftCard";
import VerdictCard from "@/components/dashboard/VerdictCard";

export default function DashboardPage() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("audit");

    if (stored) {
      const parsed = JSON.parse(stored);


      setReport(parsed);
    }
  }, []);

  if (!report) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            No Audit Available
          </h1>

          <p className="mt-4 text-gray-400">
            Go back to the homepage and analyze a Shopify store.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] px-8 py-10">
      <div className="mx-auto max-w-7xl space-y-8">

        <DashboardHeader
          products={report.stats.products}
          collections={report.stats.collections}
        />

        <KPIGrid
          overallScore={report.audit.overallScore}
          products={report.stats.products}
          collections={report.stats.collections}
          opportunities={report.stats.opportunities}
          navigationLinks={report.stats.navigationLinks}
          trustSignals={report.stats.trustSignals}
        />

        <ConversionLiftCard
          lift={report.audit.estimatedConversionLift || "Not Available"}
        />

        <ScoreSection
          score={report.audit.overallScore}
          summary={report.audit.summary}
        />

        <div className="grid gap-6 lg:grid-cols-2">

          <StrengthsCard
            strengths={report.audit.strengths || []}
          />

          <WeaknessesCard
            weaknesses={report.audit.weaknesses || []}
          />

        </div>

        <QuickWinsCard
          quickWins={report.audit.quickWins || []}
        />

        <PriorityPanel
          opportunities={report.audit.opportunities}
        />

        <EvidencePanel
          homepage={report.evidence.homepage}
          products={report.stats.products}
          collections={report.stats.collections}
        />

        <ProductPanel
          products={report.evidence.products}
        />

        <CollectionPanel
          collections={report.evidence.collections}
        />

        <OpportunityGrid
          opportunities={report.audit.opportunities}
        />

        <VerdictCard
          verdict={
            report.audit.finalVerdict ||
            "No final verdict generated."
          }
        />

      </div>
    </main>
  );
}