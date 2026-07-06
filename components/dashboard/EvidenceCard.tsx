interface EvidenceCardProps {
  title: string;
  value: string | number;
}

export default function EvidenceCard({
  title,
  value,
}: EvidenceCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-blue-500/40">

      <p className="text-xs uppercase tracking-widest text-gray-500">
        {title}
      </p>

      <p className="mt-3 break-words text-lg font-semibold text-white">
        {value || "Not Detected"}
      </p>

    </div>
  );
}