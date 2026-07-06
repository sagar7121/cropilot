"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { generateAudit } from "@/services/audit";
import LoadingOverlay from "./LoadingOverlay";

export default function URLForm() {
  const [storeUrl, setStoreUrl] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleGenerateAudit = async () => {
    setError("");

    try {
      setLoading(true);

      const result = await generateAudit(storeUrl);

      console.log("API Response:", result);

      localStorage.setItem("audit", JSON.stringify(result));

      console.log("Saved to localStorage");

      router.push("/dashboard");
    } catch (error) {
      console.error("Generate Audit Error:", error);

      setError(
        "Unable to analyze the store. Please check the URL or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay open={loading} />

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

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          onClick={handleGenerateAudit}
          disabled={loading}
          className="w-full rounded-xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Store"}
        </button>
      </div>
    </>
  );
}