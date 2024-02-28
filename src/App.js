import './App.css';
import Nav from './Layout/Nav';
import Home from './Secciones/Home';
import { useState, useEffect } from 'react';
import Dimensions from "./Layout/Dimensions";
import Footer from './Layout/Footer';


function App() {
  const [currentSection, setCurrentSection] = useState('seccion1');

  const scrollToSection = (section) => {
    console.log(section)
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
      <Footer scrollToSection={scrollToSection}></Footer>
      <Dimensions></Dimensions>

    </>
  );
}

export default App;
