interface Product {
  id: number;
  images: string[];
  title: string;
  price: number;
}

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  return (
    <>
      <img src={props.product.images[0]} className="image" />
      <div className="title">{props.product.title}</div>
      <div className="price">{props.product.price}</div>
    </>
  );
}

export default ProductCard;
