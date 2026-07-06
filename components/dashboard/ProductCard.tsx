interface ProductCardProps {
  title: string;
  price: string;
  primaryCTA: string;
}

export default function ProductCard({
  title,
  price,
  primaryCTA,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-blue-500/40">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-blue-400 font-bold">
        {price || "Price Not Found"}
      </p>

      <div className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
        {primaryCTA}
      </div>

    </div>
  );
}