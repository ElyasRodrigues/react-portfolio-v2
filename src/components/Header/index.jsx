import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"

import logo from "../../assets/logo"
import "./header.css"

export default function Header() {
  const { t, i18n: {changeLanguage, language} } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState()
  
  const [menu, setMenu] = useState(0)
  
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en"
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

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
        <Link to={"/aboutme"}>{t("header.0")}</Link>
        <Link to={"/skills"}>{t("header.1")}</Link>
        <Link to={"/projects"}>{t("header.2")}</Link>
        <Link to={"/contact"}>{t("header.3")}</Link>
        <button 
          type="button" 
          className="change-translate-btn" 
          onClick={handleChangeLanguage}>
            {language === "pt" ? "PT" : "EN"}
            <BsGlobe size={20}/>
        </button>
      </nav>
     

      <div className="menu-container">
        <button onClick={handleMenu} className="handle-menu">X</button>
        <nav className="menu" onClick={handleMenu}>
          <Link to={"/aboutme"}>{t("header.0")}</Link>
          <Link to={"/skills"}>{t("header.1")}</Link>
          <Link to={"/projects"}>{t("header.2")}</Link>
          <Link to={"/contact"}>{t("header.3")}</Link>
          <button 
            type="button" 
            className="change-translate-btn" 
            onClick={handleChangeLanguage}
            style={{fontSize: "26px"}}>
              {language === "pt" ? "PT" : "EN"}
              <BsGlobe size={26}/>
          </button>

        </nav>
      </div>

    </header>
  )
}