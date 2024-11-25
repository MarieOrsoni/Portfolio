import { useState, useEffect } from "react";
import Card from "../cards/cards";
import Modal from "../modal/card-modal";

import "./index.css";
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
        setProjects(result.projects);
      } catch (error) {
        console.error("Error fetching  projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>My projects</h2>
      <ul className="cards">
        {projects.map((project, index) => (
          <li key={index}> 
          <Card project={project} onClick={() => openModal(project)} />
            </li>
        ))}
        </ul>
            {modalData && <Modal project={modalData} onClose={closeModal}/>}
    </div>
  );
}

export default MyProjects;
