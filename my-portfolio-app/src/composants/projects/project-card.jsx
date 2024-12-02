import { useState, useEffect } from "react";
import Card from "../cards/cards";
import Modal from "../modal/card-modal";
import Skills from "../filters/filter";
import "./../../index.css";

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const openModal = (project) => {
    setModalData(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalData(null);
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dev-portfolio.json");
        const result = await response.json();

        const updatedProjects = (result.projects || []).map((project) => ({
          ...project,
          skills: project.skills.map((id) =>
            result.skills.find((skill) => skill.id === id)
          ),
        }));
        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedSkill) {
      setFilteredProjects(
        projects.filter((project) =>
          project.skills.some((skill) => skill.name === selectedSkill)
        )
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedSkill, projects]);

  return (
    <div className="projects">
      <h2 className="project-title">Mes projets</h2>
      <div className="filter-and-skills">
        <Skills
          setSelectedSkill={setSelectedSkill}
          selectedSkill={selectedSkill}
        />
      </div>
      <div className="card-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="card" onClick={() => openModal(project)}>
            <Card project={project} />
          </div>
        ))}
      </div>
      {modalData && (
        <Modal
          project={modalData}
          onClose={closeModal}
          isVisible={isModalVisible}
        />
      )}
    </div>
  );
}

export default MyProjects;
