"use client";
import { ArrowLeftSquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { addProduct } from "../services/api";

const DEFAULT_IMAGE_URL = "/images/b1.jpg";

export default function page() {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      productDetails.imageUrl = DEFAULT_IMAGE_URL;
      await addProduct(productDetails);
      toast.success("Product added successfully");
      setProductDetails({});
      router.push("/admin");
    } catch (err) {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex gap-4 items-center">
        <h2 className="text-2xl font-bold">Add your product</h2>
        <ArrowLeftSquareIcon
          size={24}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="py-2">
          <label className="font-bold">Title</label>
          <input
            type="text"
            name="name"
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter product name"
            value={productDetails.name || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="py-5">
          <label className="font-bold">Unit Price (NPR)</label>
          <input
            type="number"
            name="unitPrice"
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter price"
            value={productDetails.unitPrice || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="py-5">
          <label className="font-bold">Stock</label>
          <input
            type="number"
            name="stock"
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter stock available"
            value={productDetails.stock || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="py-5">
          <label className="font-bold">Description</label>
          <textarea
            name="description"
            rows={5}
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter description"
            value={productDetails.description || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-2 mb-10">
          <button
            disabled={loading}
            type="submit"
            className="px-10 py-2 cursor-pointer rounded-md bg-slate-600 text-white"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
