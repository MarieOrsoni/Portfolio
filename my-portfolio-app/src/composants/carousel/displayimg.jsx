import { useState } from "react";
import PropTypes from "prop-types";
import "../../index.css";

function Carousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="carousel">
      {totalImages > 1 && (
        <i
          className="fa-solid fa-chevron-left"
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
        ></i>
      )}

      <img
        className="photo"
        src={images[currentIndex]}
        alt={`${title} ${currentIndex + 1}`}
      />
      {totalImages > 1 && (
        <i
          className="fa-solid fa-chevron-right"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
        ></i>
      )}

      <div className="pagination-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              goToIndex(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carousel;
