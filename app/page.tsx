import HomeProducts from "./components/HomeProducts";

export default function Home() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Products</h2>
        <HomeProducts />
      </div>
    </section>
  );
}
