import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import useFadeInOnScroll from './fadeInOnScroll'; 
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience"
import "./styles.css";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);
  useFadeInOnScroll();  
  return (
    <>
      <header className="header">
        <div className="logo">Tanish Chavan</div>
        <nav className={`nav ${navOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeNav}>About</a>
          <a href="#projects" onClick={closeNav}>Projects</a>
          <a href="#Blogs" onClick={closeNav}>Blogs</a>
          <a href="#Education" onClick={closeNav}>Education</a>
          <a href="#skills" onClick={closeNav}>Skills</a>
          <a href="#Experience" onClick={closeNav}>Experience</a>
          <a href="#contact" onClick={closeNav}>Contact</a>
        </nav>
        <button className="nav-toggle" onClick={toggleNav}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </header>

      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="blogs"><Blogs /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="Experience"><Experience /></section>
        <section id="contact"><Contact /></section>
        
      </main>

      <footer>
        <p>&copy; 2025 Tanish Chavan</p>
      </footer>
    </>
  );
}
