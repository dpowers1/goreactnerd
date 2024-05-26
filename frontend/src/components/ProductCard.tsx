interface Product {
  id: number;
  title: string;
  price: number;
}

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  console.log(props);
  return (
    <>
      <div className="image"> </div>
      <div className="title">{props.product.title}</div>
      <div className="price">{props.product.price}</div>
    </>
  );
}

export default ProductCard;
