interface CollectionCardProps {
  title: string;
  productCount: number;
}

export default function CollectionCard({
  title,
  productCount,
}: CollectionCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-purple-500/40">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm text-gray-400">
        Products Detected
      </p>

      <p className="mt-1 text-3xl font-bold text-purple-400">
        {productCount}
      </p>

    </div>
  );
}