import URLForm from "./URLForm";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-400">
        AI-Powered Shopify CRO Platform
      </span>

      <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
        Find Hidden Conversion Opportunities
        <br />
        in Your Shopify Store
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Analyze your Shopify store using AI and receive evidence-backed CRO
        recommendations prioritized by impact, confidence, and implementation
        effort.
      </p>

      <URLForm />
    </section>
  );
}