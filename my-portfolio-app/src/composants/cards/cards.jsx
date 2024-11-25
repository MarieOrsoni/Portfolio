import PropTypes from "prop-types";

import "./../../index.css";

function Card({ project, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{project.title}</h3>
      <p>Start Date: {project.startDate}</p>
      <p>{project.description}</p>
    </div>
  );
}
Card.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Card;
