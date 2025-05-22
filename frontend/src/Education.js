import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section className="education-section">
      <h2 className="edu-title">🎓 Education</h2>

      <div className="timeline">
        <div className="timeline-item">
          <h3 className="degree">B.Tech in Computer Science</h3>
          <p className="college"> 📍Jawaharlal Nehru Technological University , Sultanpur</p>
          <p className="years"><em>   (2022 - 2026)</em></p>
        </div>

        <div className="timeline-item">
          <h3 className="degree">Intermediate (MPC)</h3>
          <p className="college">📍Akshaya Junior College,Sangareddy </p>
          <p className="years"><em>   (2020 - 2022)</em></p>
        </div>

        <div className="timeline-item">
          <h3 className="degree">Class X (State Board)</h3>
          <p className="college">📍Karuna High School , Sangareddy</p>
          <p className="years"><em>   (2007 - 2020)</em></p>
        </div>
      </div>
    </section>
  );
}
