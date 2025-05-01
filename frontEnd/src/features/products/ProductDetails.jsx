import { useParams, Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, currency } = useShop();
  const [selectedSize, setSelectedSize] = useState(null);

  const product = products?.find((p) => p._id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedSize(null); // Reset size on product change
  }, [id]);

  const suggestions = products
    ?.filter((p) => p._id !== id && p.category === product?.category);

  if (!product) {
    return <div className="p-4 text-red-600 font-semibold">Product not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <img
            src={product.image[0]}
            alt={product.name}
            className="rounded-lg w-full object-cover max-h-[500px]"
          />
          <div className="flex space-x-2 mt-4 overflow-x-auto">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className="w-20 h-20 object-cover rounded border hover:border-black"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="text-2xl font-semibold text-gray-800">
            {currency}
            {product.price?.toLocaleString()}
          </div>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              disabled={!selectedSize}
              className="flex-1 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
            >
              Add to Cart
            </button>
            <button
              disabled={!selectedSize}
              className="flex-1 px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition disabled:opacity-50"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* You May Also Like with Swiper */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {suggestions.map((item) => (
            <SwiperSlide key={item._id}>
              <Link
                to={`/product/${item._id}`}
                className="block bg-white shadow hover:shadow-lg transition rounded-lg overflow-hidden"
              >
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <div className="text-gray-600 text-sm">
                    {currency}
                    {item.price?.toLocaleString()}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetail;
