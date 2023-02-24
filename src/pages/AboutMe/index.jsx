
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

import "./aboutme.css"

import meImg from "../../assets/me.jpg"


export default function AboutMe() {

  const { t, i18n: {language} } = useTranslation()

  document.title = `Elyas Rodrigues | ${language === "pt" ? 'Sobre mim' : 'About me'}`

  return (
    <div className="container">
      <h1>{t("titles.0")}</h1>
      <div className="aboutme">
        <div className="info-content">
          <img src={meImg} alt="perfil.jgeg" />
          <p>Elyas Rodrigues</p>
          <div className="social-icons">
            <a 
              href="https://github.com/ElyasRodrigues/" 
              target={"_blank"}
              rel={"noreferrer"}>
              <FaGithub size={30}/>
            </a>
            <a 
              href="https://www.linkedin.com/in/elyasrodrigues/"
              target={"_blank"}
              rel={"noreferrer"}
              >
              <FaLinkedin size={30}/>
            </a>
            <a 
              href="https://www.instagram.com/oelyasrodrigues/"
              target={"_blank"}
              rel={"noreferrer"}
              >
              <FaInstagram size={30}/>
            </a>
          </div>
        </div>
        <div className="text-content">
          <p>{t("aboutMeTxt.0")}</p>
          <p>{t("aboutMeTxt.1")} 🤝</p>
          <div  className="btn">
            <Link to={"/skills"}>{t("aboutMeTxt.2")}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}