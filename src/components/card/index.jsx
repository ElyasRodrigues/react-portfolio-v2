import "./card.css"

export default function Card({img, name, modal}) {

  return (
    <div className="card">
      <img src={img} alt="img" className="card-img"/>
      <p className="card-title">{name}</p>
      <button className="card-button" onClick={modal}>Ver detalhes</button>
    </div>

  )
}