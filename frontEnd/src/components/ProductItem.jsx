import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product._id}`}>
        <div className="aspect-w-3 aspect-h-4">
          <img
            src={product.image[0]}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-green-100 text-green-600 px-3 py-1 text-xs font-medium rounded-full shadow">
            Bestseller
          </span>
        )}
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <div className="text-sm mt-1">
            <span className="line-through text-gray-400 mr-2">
              Rs. {product.price.toLocaleString()}
            </span>
            <span className="text-black font-semibold">
              Rs. {product.salePrice
                ? product.salePrice.toLocaleString()
                : product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
