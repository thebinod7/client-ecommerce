"use client";
import ProductList from "../admin/ProductList";
import CurrentUser from "../components/CurrentUser";

export default function page() {
  return (
    <div className="mt-5 mb-10 p-6">
      <CurrentUser />
      <div className="flex items-center justify-between gap-8">
        <h2 className="text-2xl font-bold">My Order List </h2>
      </div>
      <div className="mt-5">
        <ProductList />
      </div>
    </div>
  );
}
