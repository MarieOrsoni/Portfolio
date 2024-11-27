import { useState, useEffect } from "react";
import Card from "../cards/cards";
import Modal from "../modal/card-modal";

import "./../../index.css";

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState(null);

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/dev-portfolio.json");
        const result = await response.json();
        setProjects(result.projects || []);
      } catch (error) {
        console.error("Error fetching  projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="projects">
      <h2 className="project-title">My projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div key={index} className="card" onClick={() => openModal(project)}>
            <Card project={project} />
          </div>
        ))}
      </div>
      {modalData && <Modal project={modalData} onClose={closeModal} />}
    </div>
  );
}

export default MyProjects;
