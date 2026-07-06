interface WeaknessesCardProps {
  weaknesses: string[];
}

export default function WeaknessesCard({
  weaknesses,
}: WeaknessesCardProps) {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-red-400">
        ⚠ Critical Weaknesses
      </h2>

      <ul className="space-y-4">
        {weaknesses.length > 0 ? (
          weaknesses.map((weakness, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="mt-1 text-red-400">✖</span>

              <span>{weakness}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">
            No weaknesses detected.
          </p>
        )}
      </ul>
    </div>
  );
}