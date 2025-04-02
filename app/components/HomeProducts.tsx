"use client";
import React, { useEffect } from "react";
import { listProducts } from "../services/api";
import ProductCard from "./ProductCard";

export default function HomeProducts() {
  const [productList, setProductList] = React.useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await listProducts();
      const data = response.data;
      setProductList(data);
    }

    fetchProducts();
  }, []);

  console.log(productList);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productList.length > 0 ? (
        productList.map((product: any) => {
          return (
            <div key={product.id}>
              <ProductCard
                uuid={product.uuid}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.unitPrice}
              />
            </div>
          );
        })
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
}
