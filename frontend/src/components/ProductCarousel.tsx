import { useState } from "react";

interface Props {
  images: string[];
}

function ProductCarousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    setActiveIndex(index);
  };

  const handlePrevButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((image, index) => {
          return (
            <button
              type="button"
              key={index + image}
              data-bs-target="#imageCarousel"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={(event) => handleIndicatorClick(event, index)}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => {
          return (
            <div
              className={
                index === activeIndex ? "carousel-item active" : "carousel-item"
              }
              key={`${index}-${image}`}
            >
              <img
                src={image}
                className="d-block w-100 card-image-top"
                height="300px"
                alt="image of product"
              />
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide-to={
          activeIndex === 0 ? images.length - 1 : activeIndex - 1
        }
        onClick={handlePrevButtonClick}
      >
        Previous
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide-to={
          activeIndex === images.length - 1 ? 0 : activeIndex + 1
        }
        onClick={handleNextButtonClick}
      >
        Next
      </button>
    </div>
  );
}

export default ProductCarousel;
