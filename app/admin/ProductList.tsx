"use client";

import { useEffect, useState } from "react";
import { listProducts } from "../services/api";

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await listProducts();
      setProductList(response.data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-2 text-left">
              Product
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Unit Price
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Stock Available
            </th>
          </tr>
        </thead>
        <tbody>
          {productList.length > 0 ? (
            productList.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">
                  {item.name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  NPR. {item.unitPrice}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {item.stock}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
