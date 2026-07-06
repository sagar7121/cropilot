interface OpportunityCardProps {
  title: string;
  evidence: string;
  impact: "High" | "Medium" | "Low";
  confidence: number;
  effort: "Low" | "Medium" | "High";
  recommendation: string;
}

export default function OpportunityCard({
  title,
  evidence,
  impact,
  confidence,
  effort,
  recommendation,
}: OpportunityCardProps) {
  const impactStyles = {
    High: "bg-red-500/20 text-red-400 border-red-500/30",
    Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Low: "bg-green-500/20 text-green-400 border-green-500/30",
  };

  const effortStyles = {
    Low: "text-green-400",
    Medium: "text-yellow-400",
    High: "text-red-400",
  };

  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-xl transition hover:border-blue-500/40 hover:shadow-2xl">

      <div className="flex items-center justify-between">

        <span
          className={`rounded-full border px-4 py-1 text-sm font-semibold ${impactStyles[impact]}`}
        >
          {impact} Impact
        </span>

        <span className="text-sm text-gray-400">
          Confidence {confidence}%
        </span>

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-8 space-y-6">

        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Evidence
          </p>

          <p className="mt-2 text-gray-300 leading-7">
            {evidence}
          </p>
        </div>

        <div className="flex justify-between rounded-xl bg-black/30 p-4">

          <div>
            <p className="text-sm text-gray-500">
              Confidence
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              {confidence}%
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Effort
            </p>

            <p
              className={`mt-1 text-lg font-bold ${effortStyles[effort]}`}
            >
              {effort}
            </p>
          </div>

        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Recommendation
          </p>

          <p className="mt-2 leading-7 text-gray-300">
            {recommendation}
          </p>
        </div>

      </div>

    </div>
  );
}