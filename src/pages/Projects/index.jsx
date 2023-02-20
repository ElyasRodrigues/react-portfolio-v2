import { useState } from "react";
import { useTranslation } from "react-i18next"

import Card from "../../components/card"
import Modal from "../../components/Modal";
import projects from "./projects"


import "./projects.css"

export default function Projects() {
  const { t, i18n: {language}} = useTranslation()

  const [showModal, setShowModal] = useState(false)
  const [detail, setDetail] = useState({})


  function toogleModal(project) {
    setShowModal(!showModal)
    setDetail(project);
  }

  return (
    <div className="container">
      <h1>{t("titles.2")}</h1>
      <div className="projects-container">
        
        {projects.map(project => (
          <Card key={project.id}
            name={language === "en" && project.nameEn ? (
              project.nameEn
            ):(
              project.name
            )}
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