import "./ProductGrid.css";

import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </>
  );
}

export default ProductGrid;
