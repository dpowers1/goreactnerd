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
function ProductCard({ product }: Props) {
  return (
    <div className="col w-33 mb-3 h-100 card">
      <div id="imageCarousel" className="carousel slide">
        <div className="carousel-inner">
          {product.images.map((image, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={image}
                className="d-block w-100 card-image-top"
                alt="image of product"
                height="300px"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-title">{product.title}</div>
      <div className="price">{product.price}</div>
    </div>
  );
}

export default ProductCard;
