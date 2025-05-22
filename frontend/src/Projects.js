import React, { useRef } from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Disease Prediction using Machine Learning ',
    img: '/Screenshot 2025-05-22 132812.png',
    desc: 'Predicts diseases based on the symptoms provided by the user and offers treatment suggestions by performing Google searches (STREAMLIT)',
    link: 'https://disease-prediction-project.streamlit.app/',
  },
  {
    name: 'Resume ATS Scanner',
    img: '/2025-05-22 (4).png',
    desc: 'Takes in a users resume, analyzes it based on ATS (Applicant Tracking System) criteria, and provides a score along with detailed suggestions.',
    link: 'https://atsscore.vercel.app/',
  },
  {
    name: 'Image Resizer',
    img: '/2025-05-22 (5).png',
    desc: 'Allows users to upload an image and resize it by adjusting its height, width, quality, and file size (in bytes), while also providing a real-time preview to view the changes before downloading ',
    link: 'https://imageresizer-psi.vercel.app/',
  },
  {
    name: 'To-do',
    img: '/2025-05-22 (10).png',
    desc: 'Designed to help users manage their daily tasks while making the experience fun and rewarding. The application includes a registration and login system, ensuring that users have a personalized experience and their progress is saved.',
    link: 'https://todo-green-pi-92.vercel.app/',
  },
  {
    name: 'Simple ML Projects',
    img: '/Screenshot 2025-05-22 174724.png',
    desc: 'It contains all simple machine learning project I have worked on likie ats score , climate chnage prediction , image conversions into b&w , blurr etc using OpenCV',
    link: 'https://linktr.ee/tanishchavanml',
  },
  {
    name: 'Simple static site',
    img: '/Screenshot 2025-05-22 172208.png',
    desc: 'All projects made on initial stages using html-css-js like Alarm Clock , Scientific Calculator , Games Hub (Tic Tac Toe game , Rock Paper Scissors) , Password Strength checker ' ,
    link: 'https://linktr.ee/tanishchavanpodcastss',
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  const scrollAmount = () => {
    if (!containerRef.current) return 0;
    // scroll by one card width + gap (approx)
    return containerRef.current.clientWidth / 5 + 20;
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  };

  return (
    <section className="work-experience-section">
      <h2 className="section-title">My Projects</h2>

      <button
        className="arrow-btn arrow-left"
        aria-label="Scroll Left"
        onClick={scrollLeft}
      >
        &#8592;
      </button>
      <button
        className="arrow-btn arrow-right"
        aria-label="Scroll Right"
        onClick={scrollRight}
      >
        &#8594;
      </button>

      <div className="cards-container" ref={containerRef}>
        {projects.map(({ name, img, desc, link }, idx) => (
          <div className="project-card" key={idx}>
            <img src={img} alt={`${name} Image`} className="project-image" />
            <div className="project-name">{name}</div>
            <div className="project-description">{desc}</div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
