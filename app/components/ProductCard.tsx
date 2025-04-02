import Image from "next/image";
import React from "react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  id,
  title,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div
      key={id}
      className="group overflow-hidden rounded-lg border border-gray-300"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={`${imageUrl}?height=400&width=400`}
          alt={`Product ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-gray-900">NPR {price}</span>
        </div>
      </div>
    </div>
  );
}
