
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

import "./aboutme.css"

import meImg from "../../assets/me.jpg"


export default function AboutMe() {
  return (
    <div className="container">
      <h1>Sobre mim</h1>
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
          <p>
             Sei que é bem clichê, mas desde muito novo, sempre fui fascinado pela tecnologia, passava horas na frente de uma tela. Sempre quando eu usava algo relacionado a tecnologia, desde uma simples calculadora a um 'moderno' computador, eu sempre me perguntava: "como isso funciona?". Até que eu conheci a programação, e a partir daquele momento não demorou muito para descobrir que era isso que eu queria para minha vida. Atualmente estou aprimorando minhas habilidades e conhecimentos nas tecnologias mais requisitadas no front-end.
          </p>
          <p>
            Enfim, espero que possamos trabalhar juntos algum dia. 🤝
          </p>
          <div  className="btn">
            <Link to={"/skills"}>Ver skills</Link>
          </div>
        </div>
      </div>
    </div>
  )
}