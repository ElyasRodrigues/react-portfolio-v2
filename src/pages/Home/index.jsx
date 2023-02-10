
import "./home.css"
import img from "../../assets/initial.png"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home container">
      <div className="text-content">
        <div>
          <p>Olá, me chamo</p>
          <p className="name">Elyas Rodrigues</p>
          <p>e posso ser seu</p>
          <p>novo desenvolvedor.</p>
        </div>
        <span  className="btn">
          <Link to={"/aboutme"}>Saiba mais</Link>
        </span>
      </div>
      <div className="img-content">
        <img src={img} alt="Person Programmer" />
      </div>
    </div>
  )
}