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
//  - Add arrows to click through images on card
//  - Add popout modal
function ProductCard(props: Props) {
  return (
    <div className="col-md-4 card">
      <img src={props.product.images[0]} className="image" />
      <div className="title">{props.product.title}</div>
      <div className="price">{props.product.price}</div>
    </div>
  );
}

export default ProductCard;
