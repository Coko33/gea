import './App.css';
import Nav from './Layout/Nav';
import Home from './Secciones/Home';
import { useState, useEffect } from 'react';
import Dimensions from "./Layout/Dimensions";


function App() {
  const [currentSection, setCurrentSection] = useState('seccion1');

  const scrollToSection = (section) => {
    setCurrentSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <Nav scrollToSection={scrollToSection}></Nav>
      <Home scrollToSection={scrollToSection}></Home>
      <Dimensions></Dimensions>

    </>
  );
}

export default App;
