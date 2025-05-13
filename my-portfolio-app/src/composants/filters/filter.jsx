import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/language/Language-context";
import PropTypes from "prop-types";

const Skills = ({ setSelectedSkill, selectedSkill }) => {
  const [skills, setSkills] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetch("./dev-portfolio.json")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills))
      .catch((error) => console.error("Error fetching skills data:", error));
  }, []);

  return (
    <div className="filter-container">
      <div className="filters">
        <div
          className={`skill-item ${selectedSkill === null ? "active" : ""}`}
          onClick={() => setSelectedSkill(null)}
        >
          {language === "fr" ? "Tous" : "All"}
        </div>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-item ${
              selectedSkill === skill.name ? "active" : ""
            }`}
            onClick={() => setSelectedSkill(skill.name)}
          >
            <i className={skill.class}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
Skills.propTypes = {
  setSelectedSkill: PropTypes.func.isRequired,
  selectedSkill: PropTypes.string,
};
export default Skills;
