"use client";

import { useRouter } from "next/navigation";

interface DashboardHeaderProps {
  products: number;
  collections: number;
}

export default function DashboardHeader({
  products,
  collections,
}: DashboardHeaderProps) {
  const router = useRouter();

  const handleNewAudit = () => {
    localStorage.removeItem("audit");
    router.push("/");
  };

  return (
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Cropilot AI
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Shopify CRO Audit
        </h1>

        <p className="mt-3 text-gray-400">
          Evidence-backed AI audit for Shopify conversion optimization.
        </p>
      </div>

      <div className="flex flex-col items-end gap-4">

        <button
          onClick={handleNewAudit}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Analyze Another Store
        </button>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 px-6 py-5 shadow-lg">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Status
          </p>

          <p className="mt-2 font-semibold text-green-400">
            ✓ Analysis Complete
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-400">
            <p>{products} Products Found</p>
            <p>{collections} Collections Found</p>
          </div>

        </div>

      </div>

    </div>
  );
}