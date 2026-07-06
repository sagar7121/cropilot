import SummaryCard from "./SummaryCard";
import ScoreGauge from "./ScoreGauge";

interface ScoreSectionProps {
  score: number;
  summary: string;
}

export default function ScoreSection({
  score,
  summary,
}: ScoreSectionProps) {
  return (
    <section className="mb-10 grid gap-6 lg:grid-cols-2">

      <SummaryCard
        score={score}
        summary={summary}
      />

      <ScoreGauge
        score={score}
      />

    </section>
  );
}