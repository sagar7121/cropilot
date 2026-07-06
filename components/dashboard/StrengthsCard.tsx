interface StrengthsCardProps {
  strengths: string[];
}

export default function StrengthsCard({
  strengths,
}: StrengthsCardProps) {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-green-400">
        ⭐ Top Strengths
      </h2>

      <ul className="space-y-4">
        {strengths.length > 0 ? (
          strengths.map((strength, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="mt-1 text-green-400">✔</span>

              <span>{strength}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">
            No strengths detected.
          </p>
        )}
      </ul>
    </div>
  );
}