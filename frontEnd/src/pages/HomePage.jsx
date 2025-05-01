import React, { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import HeroSection from "../layout/HeroSection";
import StoryComponent from "../layout/Story";
import LatestCollection from "../components/LatestCollection";
import ProductItem from "../components/ProductItem";

export default function HomePage() {
  const itemsPerPage = 16;
  const initialVisibleProducts = 8;
  const [visibleProducts, setVisibleProducts] = useState(initialVisibleProducts);

  const handleViewMore = () => {
    const newVisibleCount = visibleProducts + itemsPerPage;
    if (newVisibleCount <= products.length) {
      setVisibleProducts(newVisibleCount);
    } else {
      setVisibleProducts(products.length);
    }
  };

  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-12">
      <StoryComponent />
      <HeroSection />
      <LatestCollection />

      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewMore}
            className="text-gray-700 bg-gray-200 cursor-pointer px-6 py-2 rounded-lg hover:bg-[#CCE5FF] transition-all duration-300 focus:outline-none"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
