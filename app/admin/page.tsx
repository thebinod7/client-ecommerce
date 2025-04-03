import React from "react";
import DashboardStats from "./DashboardStats";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import ProductList from "./ProductList";
import OrderList from "./OrderList";

export default function page() {
  return (
    <div className="mt-5 mb-10 p-6">
      <div>
        <DashboardStats />
      </div>

      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">Order List</h2>
        <div className="mt-5">
          <OrderList />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-8">
        <h2 className="text-2xl font-bold">Product List </h2>
        <Link href="/add-product">
          <PlusCircle size={32} />
        </Link>
      </div>
      <div className="mt-5">
        <ProductList />
      </div>
    </div>
  );
}
