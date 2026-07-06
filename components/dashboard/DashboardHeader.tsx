interface DashboardHeaderProps {
  products: number;
  collections: number;
}

export default function DashboardHeader({
  products,
  collections,
}: DashboardHeaderProps) {
  return (
    <div className="mb-12 flex items-center justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Cropilot AI
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Shopify CRO Audit
        </h1>

        <p className="mt-3 text-gray-400">
          AI-powered conversion optimization report
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900 px-6 py-5 shadow-lg">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Status
        </p>

        <p className="mt-2 font-semibold text-green-400">
          Analysis Complete
        </p>

        <div className="mt-4 space-y-1 text-sm text-gray-400">
          <p>{products} Products Found</p>
          <p>{collections} Collections Found</p>
        </div>
      </div>
    </div>
  );
}