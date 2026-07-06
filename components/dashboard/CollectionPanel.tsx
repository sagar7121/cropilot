import CollectionCard from "./CollectionCard";

interface Collection {
  title: string;
  productCount: number;
}

interface CollectionPanelProps {
  collections: Collection[];
}

export default function CollectionPanel({
  collections,
}: CollectionPanelProps) {
  return (
    <section className="mb-10">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">
          Collections Analyzed
        </h2>

        <p className="mt-2 text-gray-400">
          Shopify collections detected from the homepage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {collections.slice(0, 6).map((collection, index) => (
          <CollectionCard
            key={`${collection.title}-${index}`}
            title={collection.title}
            productCount={collection.productCount}
          />
        ))}

      </div>

    </section>
  );
}