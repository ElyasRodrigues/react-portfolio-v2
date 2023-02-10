import "./modal.css"
import { BsGlobe, BsGithub, BsX} from "react-icons/bs"

export default function Modal({content, close}) {

  return(
    <div className="modal-container">
      <div className="modal">
        <img src={content.img} alt="img do projeto" />
        <h2>{content.name}</h2>
        <p>{content.description}</p>

        <div className="links">
          <a 
            href={content.inWeb}
            target="_blank"
            rel="noreferrer">
            <BsGlobe size={30}/>
            ver na web
          </a>

          <a 
            href={content.github}
            target="_blank"
            rel="noreferrer">
            <BsGithub size={30}/>
            Ver repositorio
          </a>
        </div>

        <button onClick={close}>
          <BsX size={42}/>
        </button>
        
      </div>
    </div>
  )
}