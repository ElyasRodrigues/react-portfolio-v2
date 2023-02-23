import html5 from "../../assets/skills-icons/html5.svg"
import css3 from "../../assets/skills-icons/css3.svg"
import javascript from "../../assets/skills-icons/javascript.svg"
import sass from "../../assets/skills-icons/sass.svg"
import react from "../../assets/skills-icons/react.svg"
import firebase from "../../assets/skills-icons/firebase.svg"
import { useTranslation } from "react-i18next"

import "./skills.css"
import { Link } from "react-router-dom"

export default function Skills() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <h1>{t("titles.1")}</h1>
      <div className="skills-container">

        <div className="skill-icon">
          <img 
            src={html5}
            alt="HTML 5" 
            title="HTML 5" 
          />
          <p>HTML 5</p>
        </div>

        <div className="skill-icon">
          <img 
            src={css3}
            alt="CSS 3" 
            title="CSS 3" 
          />
          <p>CSS 3</p>
        </div>

        <div className="skill-icon">
          <img 
            src={javascript}
            alt="JAVASCRIPT" 
            title="JAVASCRIPT" 
          />
          <p>JAVASCRIPT</p>
        </div>

        <div className="skill-icon">
          <img 
            src={sass}
            alt="SASS" 
            title="SASS" 
          />
          <p>SASS</p>
        </div>

        <div className="skill-icon">
        <img 
          src={react}
          alt="REACT JS" 
          title="REACT JS" 
        />
          <p>REACT JS</p>
        </div>

        <div className="skill-icon">
          <img 
            src={firebase}
            alt="FIREBASE" 
            title="FIREBASE" 
          />
          <p>FIREBASE</p>
        </div>
      </div>
      <div className="go-projects">
        <span className="btn">
          <Link to={"/projects"}>{t("skillsBtn")}</Link>
        </span>
      </div>
    </div>
  )
}