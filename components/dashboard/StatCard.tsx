interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

const icons: Record<string, string> = {
  "Overall Score": "🎯",
  "Products Found": "📦",
  Collections: "🗂️",
  "AI Opportunities": "💡",
  "Navigation Links": "🧭",
  "Trust Signals": "🛡️",
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">

      <div className="flex items-center justify-between">

        <p className="text-sm uppercase tracking-widest text-gray-400">
          {title}
        </p>

        <span className="text-2xl">
          {icons[title] ?? "📊"}
        </span>

      </div>

      <h2 className="mt-5 text-4xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-gray-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}