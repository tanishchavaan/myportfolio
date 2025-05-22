import React, { useState } from "react";
import "./Experience.css";

const data = {
  internships: [
    {
      title: "IBM SKILLSBUILD ",
      desc: " A two week virtual IBM internship where Amit Tiwari sir taught 6 basic algorithms in the most interesting way possible .ith that knowledge , i could finally create my second project on ML ( linear regression used , tried with decision tree and random forest too ) that shows the climate change impacts , studying historical data from 1990 to 2012 .Basic but it was a learning experience for me ",
      duration: "Oct 2024 - Nov 2024",
      certificates: ["/ibmml.jpg"]
    },
    {
      title: "CODETECH TECHNOLOGIES",
      desc: "This was actually my first evr internship where I paid but it made me learn SQL and create two basic projects where I did some house prices and others data in an organized way ",
      duration: "Sep 2024 - Oct 2024",
      certificates: ["/codtech.jpg"]
    },
  ],
  courses: [
    {
      title: "Python Bootcamp",
      desc: "Complete indepth knowldge of python from baiscs to oops concpts to data structures by Let's Upgrade",
      duration: "Nov 2024",
      certificates:["/letsupgrade.jpg"]
    },
    {
      title: "Git & Github Bootcamp",
      desc: "Complete explaination of git version control system and github by Let's Upgrade ",
      duration: "Dec 2024",
      certificates: ["/gitintern.jpg"]
    }
  ],
  experience: [
    {
      title: "No Work Experience",
      desc: "Currently no professional work experience. Stay tuned for updates!",
      duration: "-",
      certificates: []
    }
  ]
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState("internships");

  const renderCards = () => {
    const items = data[activeTab];
    if (!items.length) {
      return <p className="no-experience">No {activeTab} yet, we'll update this soon!</p>;
    }

    return items.map(({ title, desc, duration, certificates }, index) => (
      <div key={index} className="project-card">
        <h3>{title}</h3>
        <h4 className="duration">({duration})</h4>
        <p>{desc}</p>
        <div className="certificates-wrapper">
          {certificates.map((cert, i) => (
            <img
              key={i}
              src={cert}
              alt={`Certificate ${i + 1}`}
              className="certificate"
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="projects-container">
      <h2 className="experience-title">Experience</h2>
      <div className="tab-buttons">
        <button
          className={activeTab === "internships" ? "active" : ""}
          onClick={() => setActiveTab("internships")}
        >
          Internships
        </button>
        <button
          className={activeTab === "courses" ? "active" : ""}
          onClick={() => setActiveTab("courses")}
        >
          Courses
        </button>
        <button
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Work Experience
        </button>
      </div>
      <div className="content-section">{renderCards()}</div>
    </div>
  );
}
