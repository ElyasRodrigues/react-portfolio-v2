import { useState } from "react";
import Card from "../../components/card"
import Modal from "../../components/Modal";
import projects from "./projects"

import "./projects.css"

export default function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [detail, setDetail] = useState({})


  function toogleModal(project) {
    setShowModal(!showModal)
    setDetail(project);
    console.log(project);

  }

  return (
    <div className="container">
      <h1>Projetos</h1>
      <div className="projects-container">
        
        {projects.map(project => (
          <Card key={project.id}
            name={project.name}
            img={project.img}
            modal={() => toogleModal(project)}
          />
        ))}


      </div>
      {showModal && (
          <Modal 
            content={detail} 
            close={toogleModal}
          />
        )}
    </div>
  )
}