"use client";
import { generateAudit } from "@/services/audit";
import { useState } from "react";

export default function URLForm() {
  const [storeUrl, setStoreUrl] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGenerateAudit = async () => {
  try {
    setLoading(true);

    console.log("Store URL:", storeUrl);

    const result = await generateAudit(storeUrl);

    console.log(result);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="mt-10 w-full max-w-2xl space-y-4">
      <input
        type="url"
        placeholder="https://your-shopify-store.com"
        value={storeUrl}
        onChange={(e) => setStoreUrl(e.target.value)}
        className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-blue-500"
      />

      <input
        type="url"
        placeholder="Competitor URL (Optional)"
        value={competitorUrl}
        onChange={(e) => setCompetitorUrl(e.target.value)}
        className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-blue-500"
      />

      <button
  onClick={handleGenerateAudit}
  disabled={loading}
  className="w-full rounded-xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Analyzing..." : "Analyze Store"}
</button>
    </div>
  );
}