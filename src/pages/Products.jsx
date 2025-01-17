import React from "react";
import ProductCard from "../components/products/ProductCard";
import { featuredProducts } from "../assets/data/products";

const Products = () => {
  const productsData = featuredProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Discover Our Featured Products</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Browse through our exclusive selection of handpicked products designed to meet your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
