import EvidenceCard from "./EvidenceCard";

interface HomepageEvidence {
  title: string;
  heroHeading: string;
  primaryCTA: string;
  announcementBar: string;
  navigationLinks: string[];
  trustSignals: string[];
}

interface EvidencePanelProps {
  homepage: HomepageEvidence;
  products: number;
  collections: number;
}

export default function EvidencePanel({
  homepage,
  products,
  collections,
}: EvidencePanelProps) {
  return (
    <section className="mb-10">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">
          Evidence Collected
        </h2>

        <p className="mt-2 text-gray-400">
          The AI analyzed the following homepage elements before generating
          recommendations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <EvidenceCard
          title="Homepage Title"
          value={homepage.title}
        />

        <EvidenceCard
          title="Hero Heading"
          value={homepage.heroHeading}
        />

        <EvidenceCard
          title="Primary CTA"
          value={homepage.primaryCTA}
        />

        <EvidenceCard
          title="Announcement Bar"
          value={homepage.announcementBar}
        />

        <EvidenceCard
          title="Navigation Links"
          value={homepage.navigationLinks.length}
        />

        <EvidenceCard
          title="Trust Signals"
          value={homepage.trustSignals.length}
        />

        <EvidenceCard
          title="Products Found"
          value={products}
        />

        <EvidenceCard
          title="Collections Found"
          value={collections}
        />

      </div>

    </section>
  );
}