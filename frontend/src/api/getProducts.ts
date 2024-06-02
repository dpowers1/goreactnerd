import Product from "../types";

const BASE_URL: string = "https://dummyjson.com"

function getProducts(): Promise<Product[]> {
  return fetch(`${BASE_URL}/products`)
  .then ((response) => response.json())
  .then((data) => data.products)
}

export default getProducts;