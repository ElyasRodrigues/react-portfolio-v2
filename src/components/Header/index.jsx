import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

import logo from "../../assets/logo"
import "./header.css"

export default function Header() {
  const [menu, setMenu] = useState(0)

  function handleMenu(){
    const menuH = document.querySelector(".menu-container")
    if(menu === 1){
      menuH.style.width = 0
      setMenu(0)
      return
    } else {
      menuH.style.width = "100%"
      setMenu(1)
    }
  }
  
  return(
    <header className="header-container">
      <Link to={"/"} className="logo">
        <span>{logo()}</span>
      </Link>

      <button onClick={handleMenu} className="open-menu">
        <FaBars/>
      </button>
      <nav className="links hide">
        <Link to={"/aboutme"}>Sobre</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/projetos"}>Projetos</Link>
        <Link to={"/contato"}>Contato</Link>
      </nav>
     

      <div className="menu-container">
        <button onClick={handleMenu}>X</button>
        <nav className="menu" onClick={handleMenu}>
          <Link to={"/aboutme"}>Sobre</Link>
          <Link to={"/skills"}>Skills</Link>
          <Link to={"/projetos"}>Projetos</Link>
          <Link to={"/contato"}>Contato</Link>
        </nav>
      </div>

    </header>
  )
}