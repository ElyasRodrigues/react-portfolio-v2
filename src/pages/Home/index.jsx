
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import img from "../../assets/initial.png"
import "./home.css"

export default function Home() {
  const { t } = useTranslation()

  document.title = `Elyas Rodrigues | Portfólio`

  return (
    <div className="home container">
      <div className="text-content">
        <div>
          <p>{t("homeTxt.0")}</p>
          <p className="name">Elyas Rodrigues</p>
          <p>{t("homeTxt.1")}</p>
          <p>{t("homeTxt.2")}</p>
        </div>
        <span  className="btn">
          <Link to={"/aboutme"}>{t("homeTxt.3")}</Link>
        </span>
      </div>
      <div className="img-content">
        <img src={img} alt="Person Programmer" />
      </div>
    </div>
  )
}