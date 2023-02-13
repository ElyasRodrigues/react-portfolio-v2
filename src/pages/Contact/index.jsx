import { useState } from "react"

import "./contact.css"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "" 
  })

  function handleChange (ev) {

    const {name, value} = ev.target

    setFormData((prev) => {
      const newData = {...prev, [name]: value}
      return newData
    })

  }

  function  handleSubmit(ev) {
    ev.preventDefault()
    console.log(formData);
  }

  return (
    <div className="container">
      <h1>Contato</h1>
      <div className="form-contact">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Digite seu nome.."
            value={formData.name}
            onChange={handleChange}

          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="informe seu email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Mensagem:</label>
          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="10" 
            placeholder="Digite sua mensagem.."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}