import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import "./About.css";

const TYPEWRITER_TEXT = "Yo, it's your dawg , Tanish Chavan";

export default function About() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(TYPEWRITER_TEXT.slice(0, i + 1));
      i++;
      if (i === TYPEWRITER_TEXT.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <div className="intro-typewriter">
        <h1>{text}</h1>
      </div>

      <div className="profile-pic-wrapper">
        <img src="/photo1.jpg" alt="Tanish Chavan" className="profile-pic" />
      </div>

      <h1>ABOUT ME </h1>

      <div className="about-text">
        <p>
          Hey , I am Tanish Chavan who is currently pursuing his Bachelors degree in technology .As a dedicated front-end developer with a passion for data structures and algorithms (DSA), I am continuously expanding my technical skill set. My interest spans across Power BI, Flutter, and digital marketing, reflecting my commitment to staying at the forefront of industry trends. Multilingual communication is one of my strengths, enabling me to connect and collaborate effectively across diverse teams.
        </p><br/>
        <p>
          My leadership abilities were honed during my tenure as Head Boy in school, where I demonstrated strong organizational and leadership skills. I believe that clear communication is pivotal in driving success and fostering teamwork.
        </p><br/>
        <p>
          I'm eager to leverage my technical expertise and leadership experience to contribute to innovative projects and drive meaningful results. Let's connect to explore opportunities and collaborations!
        </p>
      </div>

      <div className="download-cv-wrapper">
        <a
          href="/tanishchavanresume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="download-cv-btn"
        >
          Download CV
        </a>

        <a
          href="https://www.linkedin.com/in/tanish-chavaaan/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/tanishchavaan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.kaggle.com/tanishchavaan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Kaggle"
        >
          <FaKaggle />
        </a>
      </div>
    </div>
  );
}
