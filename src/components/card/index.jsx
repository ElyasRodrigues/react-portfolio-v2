import "./card.css"
import { useTranslation } from "react-i18next"

export default function Card({img, name, modal}) {
  const { t } = useTranslation() 
  
  return (
    <div className="card">
      <img src={img} alt="img" className="card-img"/>
      <p className="card-title">{name}</p>
      <button className="card-button" onClick={modal}>{t("projects.0")}</button>
    </div>

  )
}