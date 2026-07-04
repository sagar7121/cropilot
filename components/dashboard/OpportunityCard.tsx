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
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
      <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400">
        {impact} Impact
      </span>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Evidence
          </h4>

          <p className="mt-1 text-gray-300">
            {evidence}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm text-gray-400">
              Confidence
            </h4>

            <p className="font-semibold text-white">
              {confidence}%
            </p>
          </div>

          <div>
            <h4 className="text-sm text-gray-400">
              Effort
            </h4>

            <p className="font-semibold text-white">
              {effort}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            Recommendation
          </h4>

          <p className="mt-1 text-gray-300">
            {recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}