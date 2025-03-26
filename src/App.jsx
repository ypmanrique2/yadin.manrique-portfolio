import { useEffect, useState } from "react";
import './App.css'
import { LoadingScreen } from "./components/LoadinScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Inicio } from "./components/sections/Inicio";
import { Sobre_mi } from "./components/sections/Sobre_mi";
import { Proyectos } from "./components/sections/Proyectos";
import { Contacto } from "./components/sections/Contacto";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Inicio />
        <Sobre_mi />
        <Proyectos />
        <Contacto />
      </div >
      <div className="hidden reveal visible"></div>
    </>
  );
}

export default App;