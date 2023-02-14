import { Link } from "react-router-dom"

import "./error.css"


export default function Error() {
  return(
    <div className="container">
      <div className="error-container">
        <div className="error">
          <h1>
            Error <span className="four">4</span>0<span className="four">4</span>
          </h1>
          <p>Ops, página não encontrada :(</p>
          
          <Link to={"/"}>Voltar para a home</Link>
        </div>
      </div>
    </div>
  )
}