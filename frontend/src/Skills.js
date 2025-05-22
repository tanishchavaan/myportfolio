import React from "react";
import "./Skills.css";

const languages = [
  { name: "JavaScript", symbol: "JS" },
  { name: "Java", symbol: "☕" },
  { name: "Python", symbol: "🐍" },
  { name: "C++", symbol: "++" },
  { name: "SQL", symbol: "🗄️" },
];

const technologies = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Power BI",
  "Flutter",
  "Machine Learning",
  "Generative AI",
  "Docker",
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">💻 Skills</h2>

      {/* 1. Languages subsection */}
      <div className="languages-container">
        {languages.map(({ name, symbol }) => (
          <div key={name} className="language-box">
            <span className="lang-symbol">{symbol}</span>
            <strong className="lang-name">{name}</strong>
          </div>
        ))}
      </div>
        <h2 className="skills-title">💻 Technologies</h2>
      {/* 2. Technologies constellation subsection */}
      <div className="tech-constellation">
        {technologies.map((tech, i) => (
          <div key={tech} className={`tech-node node-${i + 1}`}>
            {tech}
            <svg className="connector" width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" />
            </svg>
          </div>
        ))}
      </div>

      {/* 3. Spin wheel subsection */}
      <div className="spin-wheel-wrapper">
        <div className="outer-ring">
          {technologies.map((tech, i) => (
            <span key={tech} className="outer-ring-item" style={{ "--i": i }}>
              {tech}
            </span>
          ))}
        </div>
        <div className="inner-ring">
          {languages.map(({ name }) => (
            <span key={name} className="inner-ring-item" style={{ "--i": languages.indexOf(languages.find(l => l.name === name)) }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
