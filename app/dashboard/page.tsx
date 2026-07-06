"use client";

import { useEffect, useState } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPIGrid from "@/components/dashboard/KPIGrid";
import SummaryCard from "@/components/dashboard/SummaryCard";
import OpportunityGrid from "@/components/dashboard/OpportunityGrid";

export default function DashboardPage() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("audit");

    if (stored) {
      const parsed = JSON.parse(stored);

      console.log("Dashboard Report:", parsed);

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
      <div className="mx-auto max-w-7xl">

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

        <div className="mb-10">
          <SummaryCard
            score={report.audit.overallScore}
            summary={report.audit.summary}
          />
        </div>

        <OpportunityGrid
          opportunities={report.audit.opportunities}
        />

      </div>
    </main>
  );
}