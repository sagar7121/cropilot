interface ScoreGaugeProps {
  score: number;
}

export default function ScoreGauge({
  score,
}: ScoreGaugeProps) {
  const radius = 70;
  const stroke = 12;

  const normalizedRadius = radius - stroke * 0.5;

  const circumference = normalizedRadius * 2 * Math.PI;

  const progress = circumference - (score / 100) * circumference;

  const color =
    score >= 80
      ? "#22c55e"
      : score >= 60
      ? "#eab308"
      : "#ef4444";

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        CRO Health Score
      </h2>

      <div className="flex justify-center">

        <svg
          height={160}
          width={160}
        >
          <circle
            stroke="#27272a"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="80"
            cy="80"
          />

          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progress}
            r={normalizedRadius}
            cx="80"
            cy="80"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="32"
            fontWeight="bold"
          >
            {score}
          </text>
        </svg>

      </div>

      <p className="mt-6 text-center text-gray-400">

        {score >= 80
          ? "Excellent CRO Health"
          : score >= 60
          ? "Needs Optimization"
          : "Critical Improvements Needed"}

      </p>

    </div>
  );
}