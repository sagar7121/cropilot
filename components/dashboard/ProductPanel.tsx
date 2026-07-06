import ProductCard from "./ProductCard";

interface Product {
  title: string;
  price: string;
  primaryCTA: string;
}

interface ProductPanelProps {
  products: Product[];
}

export default function ProductPanel({
  products,
}: ProductPanelProps) {
  return (
    <section className="mb-10">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">
          Products Analyzed
        </h2>

        <p className="mt-2 text-gray-400">
          Sample products extracted from the Shopify homepage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            primaryCTA={product.primaryCTA}
          />
        ))}

      </div>

    </section>
  );
}