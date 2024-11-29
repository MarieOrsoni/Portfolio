import PropTypes from "prop-types";
import Carousel from "../carousel/displayimg";
import "./../../index.css";
import { useEffect, useState } from "react";

function Modal({ project, onClose, isVisible }) {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(()=> {
    if (isVisible) {
      setAnimationClass('show');
    } else {
      setAnimationClass('hide');
      setTimeout(()=> onClose(), 500);
    }
  }, [isVisible, onClose]);

  return (
    <div className={`modal ${animationClass}`}>
      <div className="modal-close" onClick={()=> setAnimationClass('hide')}>&times;</div>

      <div className="modal-open">
        <i className="fa-solid fa-x" onClick={onClose}></i>
        <Carousel images={project.images} title={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech.name}</li>
            ))}
          </ul>
        )}
        {project.skills && (
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>
                <i className={skill.class}></i>
                {skill.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
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
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        class: PropTypes.string,
        imageUrl: PropTypes.string,
      })
    ),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Modal;
