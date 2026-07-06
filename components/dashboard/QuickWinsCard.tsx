interface QuickWinsCardProps {
  quickWins: string[];
}

export default function QuickWinsCard({
  quickWins,
}: QuickWinsCardProps) {
  return (
    <div className="rounded-2xl border border-blue-500/20 bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-blue-400">
        🚀 Quick Wins
      </h2>

      <ul className="space-y-4">
        {quickWins.length > 0 ? (
          quickWins.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="mt-1 text-blue-400">➜</span>

              <span>{item}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">
            No quick wins available.
          </p>
        )}
      </ul>
    </div>
  );
}