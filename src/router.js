import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"

export default function Router() {
  return(
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/aboutme" element={ <AboutMe/> }/>
      <Route path="/skills" element={ <Skills/> }/>
      <Route path="/projetos" element={ <Projects/> }/>
      <Route path="/contato" element={ <Contact/> }/>
    </Routes>
  )
}