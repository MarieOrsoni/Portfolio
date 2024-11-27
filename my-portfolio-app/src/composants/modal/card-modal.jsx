import PropTypes from "prop-types";
import Carousel from "../carousel/displayimg";
import "./../../index.css";

function Modal({ project, onClose }) {
  return (
    <>
      <div
        className="modal-close"
        onClick={onClose} // Close modal on backdrop click
      ></div>

      <div className="modal-open">
        <Carousel images={project.images} title={project.title} />
        <h2>{project.title}</h2>

        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech.name}</li>
          ))}
        </ul>
        <i className="fa-solid fa-x" onClick={onClose}></i>
      </div>
    </>
  );
}

// Define PropTypes
Modal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,

  onClose: PropTypes.func.isRequired,
};

export default Modal;
