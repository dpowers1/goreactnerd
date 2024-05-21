import ProductCard from "./ProductCard";

function ProductGrid() {
  const products = [];

  fetch("http://localhost:8080/products")
    .then((response) => response.json())
    .then((data) => {
      products.push(data);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(products);
  return (
    <>
      <ProductCard />
    </>
  );
}

export default ProductGrid;
