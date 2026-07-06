interface PriorityFixCardProps {
  title: string;
  impact: "High" | "Medium" | "Low";
  recommendation: string;
}

const colors = {
  High: "border-red-500 bg-red-500/10 text-red-400",
  Medium: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
  Low: "border-green-500 bg-green-500/10 text-green-400",
};

export default function PriorityFixCard({
  title,
  impact,
  recommendation,
}: PriorityFixCardProps) {
  return (
    <div className={`rounded-xl border p-6 ${colors[impact]}`}>

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <span className="rounded-full bg-black/30 px-3 py-1 text-sm">
          {impact}
        </span>

      </div>

      <p className="mt-5 leading-7 text-gray-200">
        {recommendation}
      </p>

    </div>
  );
}