interface SummaryCardProps {
  score: number;
  summary: string;
}

export default function SummaryCard({
  score,
  summary,
}: SummaryCardProps) {
  const grade =
    score >= 90
      ? "A+"
      : score >= 80
      ? "A"
      : score >= 70
      ? "B"
      : score >= 60
      ? "C"
      : "D";

  return (
    <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-10 shadow-2xl">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            CRO Audit
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Overall Score
          </h1>
        </div>

        <div className="rounded-2xl border border-gray-700 px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Grade
          </p>

          <p className="mt-1 text-3xl font-bold text-green-400">
            {grade}
          </p>
        </div>

      </div>

      <div className="mt-10 flex items-end gap-3">

        <span className="text-7xl font-bold text-white">
          {score}
        </span>

        <span className="pb-2 text-3xl text-gray-500">
          /100
        </span>

      </div>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-gray-800">

        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${score}%` }}
        />

      </div>

      <div className="mt-10">

        <h2 className="text-xl font-semibold text-white">
          Executive Summary
        </h2>

        <p className="mt-4 leading-8 text-gray-400">
          {summary}
        </p>

      </div>

    </div>
  );
}