import { useParams } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Filter products based on category
  const filtered = products.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") === categoryName
  );

  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {categoryName.replace(/-/g, " ")}
      </h2>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
