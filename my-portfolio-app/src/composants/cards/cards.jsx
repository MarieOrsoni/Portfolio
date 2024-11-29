import PropTypes from "prop-types";
import Carousel from "../carousel/displayimg";
import "../../index.css";

function Card({ project, onClick }) {
  return (
    <div className="cards" onClick={onClick}>
      <Carousel images={project.images} title={project.title} />
      <h3 className="cards-title">{project.title}</h3>
      <p className="cards-description">{project.description}</p>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default Card;
