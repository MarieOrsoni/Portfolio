import { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./dev-portfolio.json")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills))
      .catch((error) => console.error("Error fetching skills data:", error));
  }, []);

  const filteredSkills = skills.filter((skill) => skill.name.toLowerCase());
  return (
    <div className="filter-container">
      <h2>Compétences </h2>
      <div className="filters">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <i className={skill.class}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
