interface ConversionLiftCardProps {
  lift: string;
}

export default function ConversionLiftCard({
  lift,
}: ConversionLiftCardProps) {
  return (
    <div className="rounded-2xl border border-purple-500/20 bg-gray-900 p-6 shadow-lg">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Estimated Conversion Lift
      </p>

      <h2 className="mt-3 text-4xl font-bold text-purple-400">
        {lift}
      </h2>

      <p className="mt-3 text-gray-400">
        Estimated improvement after implementing the recommendations.
      </p>
    </div>
  );
}