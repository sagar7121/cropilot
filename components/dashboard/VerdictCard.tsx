interface VerdictCardProps {
  verdict: string;
}

export default function VerdictCard({
  verdict,
}: VerdictCardProps) {
  return (
    <div className="rounded-2xl border border-gray-700 bg-gray-900 p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-white">
        ✅ Final Verdict
      </h2>

      <p className="leading-8 text-gray-300">
        {verdict}
      </p>
    </div>
  );
}