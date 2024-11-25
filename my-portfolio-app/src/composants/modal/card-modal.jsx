import PropTypes from "prop-types";
import "../projects/index.css";

function Modal({ project, onClose }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          zIndex: 999,
        }}
        onClick={onClose} // Close modal on backdrop click
      ></div>

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>
              <i className={tech.class}></i> {tech.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose} style={{ marginTop: "1rem" }}>
          Close
        </button>
      </div>
    </>
  );
}

// Define PropTypes
Modal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        class: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
