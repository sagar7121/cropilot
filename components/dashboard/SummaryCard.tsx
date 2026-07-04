interface SummaryCardProps {
  score: number;
  summary: string;
}

export default function SummaryCard({
  score,
  summary,
}: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
      <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">
        Overall CRO Score
      </h2>

      <p className="mt-4 text-6xl font-bold text-white">
        {score}
        <span className="text-3xl text-gray-500">/100</span>
      </p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">
          Executive Summary
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {summary}
        </p>
      </div>
    </div>
  );
}