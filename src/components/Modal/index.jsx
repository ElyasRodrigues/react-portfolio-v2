import { useTranslation } from "react-i18next"
import { BsGlobe, BsGithub, BsX} from "react-icons/bs"


import "./modal.css"

export default function Modal({content, close}) {
  const { i18n: {language} } = useTranslation()

  return(
    <div className="modal-container">
      <div className="modal">
        <img src={content.img} alt="img do projeto" />
        <h2>
          {language === "en" && content.nameEn ? (
            content.nameEn
          ):(
            content.name
          )}
        </h2>

        <p>{language === "pt" ? (
          content.descriptionPt
        ):(
          content.descriptionEn
        )}</p>

        <div className="links">
          <a 
            href={content.inWeb}
            target="_blank"
            rel="noreferrer">
            <BsGlobe size={30}/>
              {language === "pt" ? (
                "Ver na Web"
              ):(
                "see on the web"
              )}
          </a>

          <a 
            href={content.github}
            target="_blank"
            rel="noreferrer">
            <BsGithub size={30}/>
              {language === "pt" ? (
                "Ver repositório"
              ):(
                "see repository"
              )}
            
          </a>
        </div>

        <button onClick={close}>
          <BsX size={42}/>
        </button>
        
      </div>
    </div>
  )
}