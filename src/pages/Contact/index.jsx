import { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { FaWhatsapp, FaAngleDoubleRight, FaAngleDoubleDown } from "react-icons/fa"

import "./contact.css"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "" 
  })
  const [messageWpp, setMessageWpp] = useState("")

  function handleChange (ev) {

    const {name, value} = ev.target

    setFormData((prev) => {
      const newData = {...prev, [name]: value}
      return newData
    })

  }

  
  function  handleSubmit(ev) {
    ev.preventDefault()
    
    if(formData.name === ""){
      toast.error("Informe seu nome!");
      return
    }
    if(formData.email === ""){
      toast.error("Informe seu email!");
      return
    }
    if(formData.message === ""){
      toast.error("Digite a mensagem!");
      return
    }

    const emailTemplate = "service_3oue9nk"
    const templateId = "template_8ivprki"
    const publicKey = "kN3xYmPuWvs61QbsK"

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
      email: formData.email
    }

    emailjs.send(emailTemplate, templateId, templateParams, publicKey)
    .then(() => {
      toast.success("Email enviado");
      toast.warning(`Logo, logo, entrarei em contato com você, ${formData.name} :)`);
      setFormData({
        name: "",
        email: "",
        message: "" 
      })
    })
    .catch((err) => console.log(err))

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
        <div className="icon">
          <span className="rigth"><FaAngleDoubleRight size={40}/></span>
          <span className="down"><FaAngleDoubleDown size={40}/></span>
        </div>
        <div className="whatsapp">
          <p>Ou se preferir, me chama no <FaWhatsapp title="Whatsapp"/></p>
          <textarea 
            name="wpp" 
            id="wpp" 
            value={messageWpp}
            onChange={(e) => setMessageWpp(e.target.value)}
            placeholder="Digite sua mensagem.."
            >  
          </textarea>

          <a 
            href={`https://wa.me/98988149744?text=${messageWpp}`}
            target="_blank"
            rel="noreferrer" 
          >Mandar mensagem <FaWhatsapp size={20}/></a>
        </div>
      </div>
    </div>
  )
}