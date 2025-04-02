import ProductCard from "./components/ProductCard";

const product_list = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    imageUrl: "/images/b1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    imageUrl: "/images/b2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    imageUrl: "/images/b3.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    price: 400,
    imageUrl: "/images/b4.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product_list.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      imageUrl={product.imageUrl}
                      price={product.price}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
