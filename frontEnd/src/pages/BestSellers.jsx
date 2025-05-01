import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";

const itemsPerPage = 15;

export default function BestSeller() {
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const start = (page - 1) * itemsPerPage;

  // Filter bestsellers
  const bestsellerProducts = products.filter((product) => product.bestseller);

  // Sort products
  const sortedProducts = [...bestsellerProducts].sort((a, b) => {
    return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
  });

  // Paginate
  const paginatedProducts = sortedProducts.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(bestsellerProducts.length / itemsPerPage);

  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="text-sm font-medium mr-2">Price:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Sort by: <span className="font-medium capitalize">{sortOrder.replace(/-/g, " ")}</span> | {bestsellerProducts.length} products
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}
