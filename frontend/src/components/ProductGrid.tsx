import Product from "../types";

import getProducts from "../api/getProducts";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-3 align-items-start">
          {products &&
            products.length > 0 &&
            products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </div>
      </div>
    </>
  );
}

export default ProductGrid;
