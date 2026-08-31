import { useState, useEffect } from "react";
import './App.css'
import { LoadingScreen } from "./components/LoadinScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Inicio } from "./components/sections/Inicio";
import { Sobre_mi } from "./components/sections/Sobre_mi";
import { Experiencia } from "./components/sections/Experiencia";
import { Proyectos } from "./components/sections/Proyectos";
import { Habilidades } from "./components/sections/Habilidades";
import { Certificaciones } from "./components/sections/Certificaciones";
import { EducacionIdiomas } from "./components/sections/EducacionIdiomas";
import { Contacto } from "./components/sections/Contacto";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClearMode, setIsClearMode] = useState(() => localStorage.getItem("clearMode") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("clear-mode", isClearMode);
    localStorage.setItem("clearMode", isClearMode);
  }, [isClearMode]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
      <div className={`min-h-screen transition-opacity duration-700 transition-colors ${isLoaded ? "opacity-100" : "opacity-0"} ${isClearMode ? "bg-gray-100 text-gray-900" : "bg-black text-gray-100"}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isClearMode={isClearMode} toggleClearMode={() => setIsClearMode((v) => !v)} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isClearMode={isClearMode} toggleClearMode={() => setIsClearMode((v) => !v)} />
        <Inicio />
        <Sobre_mi />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Certificaciones />
        <EducacionIdiomas />
        <Contacto />
      </div >
    </>
  );
}

export default App;