interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg transition hover:border-blue-500/40">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}