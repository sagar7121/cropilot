import PriorityFixCard from "./PriorityFixCard";

interface Opportunity {
  title: string;
  impact: "High" | "Medium" | "Low";
  recommendation: string;
}

interface PriorityPanelProps {
  opportunities: Opportunity[];
}

const impactWeight = {
  High: 3,
  Medium: 2,
  Low: 1,
};

export default function PriorityPanel({
  opportunities,
}: PriorityPanelProps) {

  const topThree = [...opportunities]
    .sort(
      (a, b) =>
        impactWeight[b.impact] - impactWeight[a.impact]
    )
    .slice(0, 3);

  return (
    <section className="mb-10">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-white">
          🔥 Top Priority Fixes
        </h2>

        <p className="mt-2 text-gray-400">
          Start with these recommendations to achieve the highest
          potential conversion impact.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {topThree.map((item) => (
          <PriorityFixCard
            key={item.title}
            title={item.title}
            impact={item.impact}
            recommendation={item.recommendation}
          />
        ))}

      </div>

    </section>
  );
}