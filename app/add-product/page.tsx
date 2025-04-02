import React from "react";

export default function page() {
  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Add your product</h2>

      <form>
        <div className="py-2">
          <label className="font-bold">Title</label>
          <input
            type="text"
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="py-5">
          <label className="font-bold">Price</label>
          <input
            type="text"
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="py-5">
          <label className="font-bold">Description</label>
          <textarea
            rows={5}
            className="block w-full px-5 py-2 border border-gray-300 rounded-md outline-none"
            placeholder="Enter description"
            required
          />
        </div>

        <div className="mt-2 mb-10">
          <button
            type="submit"
            className="px-10 py-2 cursor-pointer rounded-md bg-slate-600 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
