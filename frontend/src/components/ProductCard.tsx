import ProductCarousel from "./ProductCarousel";

interface Product {
  id: number;
  images: string[];
  title: string;
  price: number;
}

interface Props {
  product: Product;
}

// TODO:
//  - Add popout modal
function ProductCard({ product }: Props) {
  return (
    <div className="col w-33 mb-3 h-100 card">
      <ProductCarousel images={product.images} />

      <div className="card-title">{product.title}</div>
      <div className="price">{product.price}</div>
    </div>
  );
}

export default ProductCard;
