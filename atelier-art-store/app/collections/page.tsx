import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { products } from "../products";

export default function Collections() {
  // Make absolutely sure we are working with an array
  const productList = Array.isArray(products) ? products : [];

  const collections = Array.from(
    new Set(productList.map((product) => product.collection))
  );

  return (
    <>
      <Header />

      <main className="container py-16">
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[.2em] mb-4">
            Explore
          </p>

          <h1 className="serif text-6xl">
            Collections
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection) => {
            const product = productList.find(
              (item) => item.collection === collection
            );

            if (!product) return null;

            return (
              <Link
                href={`/shop?collection=${encodeURIComponent(collection)}`}
                key={collection}
                className="group"
              >
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover art"
                    alt={collection}
                  />
                </div>

                <h2 className="serif text-2xl mt-4">
                  {collection}
                </h2>

                <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mt-1">
                  View collection →
                </p>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
