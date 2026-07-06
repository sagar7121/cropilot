import StatCard from "./StatCard";

interface KPIGridProps {
  overallScore: number;
  products: number;
  collections: number;
  opportunities: number;
  navigationLinks: number;
  trustSignals: number;
}

export default function KPIGrid({
  overallScore,
  products,
  collections,
  opportunities,
  navigationLinks,
  trustSignals,
}: KPIGridProps) {
  return (
    <div className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Overall Score"
        value={`${overallScore}/100`}
        subtitle="AI Generated"
      />

      <StatCard
        title="Products Found"
        value={products}
        subtitle="Detected Products"
      />

      <StatCard
        title="Collections"
        value={collections}
        subtitle="Detected Collections"
      />

      <StatCard
        title="AI Opportunities"
        value={opportunities}
        subtitle="Optimization Ideas"
      />

      <StatCard
        title="Navigation Links"
        value={navigationLinks}
        subtitle="Header Navigation"
      />

      <StatCard
        title="Trust Signals"
        value={trustSignals}
        subtitle="Detected Signals"
      />

    </div>
  );
}