import ProductCard from "./ProductCard";

function ProductGrid() {
  const products = [];

  fetch("https://dummyjson.com/products")
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
