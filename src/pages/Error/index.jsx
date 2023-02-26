import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./error.css"


export default function Error() {
  const { t, i18n: {language}} = useTranslation()

  document.title = `Elyas Rodrigues | ${language === "pt" ? 'Página não encontrada' : 'Page not found'}`

  return(
    <div className="container">
      <div className="error-container">
        <div className="error">
          <h1>
            Error <span className="four">4</span>0<span className="four">4</span>
          </h1>
          <p>{t("error")} :(</p>
          
          <Link to={"/"}>
            {language === "pt" ? "Voltar ao início" : "Back to start"}
          </Link>
        </div>
      </div>
    </div>
  )
}