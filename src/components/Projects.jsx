import { motion } from "framer-motion";
import { useState } from "react";

import project1 from "/images/project1.jpg";

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const projects = [
    {
      title: "Wonderlust",
      domain: "FullStack Development",
      // image: "/JaganPortfolio/images/project1.jpg" , 
      image: project1,
      back: {
        Description: "Developed Wanderlust, a dynamic website enabling users to host listings and receive ratings and reviews. Integrated mapping functionality to provide location services seamlessly.",
        TechStack: "HTML, CSS, Javascript, Node.js, Express, MongoDB",
        Live: "https://wonderlust-1-73w4.onrender.com/listings",
        Github: "https://github.com/jagan00002/Wonderlust",
      },
    },
    {
      title: "Simon Says Game",
      domain: "Front-End Development",
      // image: "/JaganPortfolio/images/project2.jpg",
      image: project1,
      back: {
        Description: "A fun and interactive memory-based color sequence game. The game generates a random color pattern that the user must repeat in the correct order to advance to the next level. Each level increases in difficulty as the sequence grows longer.",
        TechStack: "HTML, CSS, Javascript",
        Live: "https://jagan00002.github.io/SimonSaysGameFinal/",
        Github: "https://github.com/jagan00002/SimonSaysGameFinal",
      },
    },
    // {
    //   title: "Dog's Breed Classification",
    //   domain: "Machine Learning",
    //   image: "/images/dogs.jpg",
    //   back: {
    //     Description: "CNN-based breed classifier with 90% accuracy.",
    //     TechStack: "Python, TensorFlow, Flask",
    //     Live: "https://your-dog-classifier.com",
    //     Github: "https://github.com/your-ml-repo",
    //   },
    // },
  ];

  const flipCard = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section id="projects" className="section projects">
      <h3 className="section-subtitle">Projects</h3>

      <div className="project-grid">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className={`flip-card ${flippedIndex === idx ? "flipped" : ""}`}
            onClick={() => flipCard(idx)}
          >
            <div className="flip-inner">
              
              {/* FRONT SIDE */}
              <motion.div className="flip-front">
                <img src={p.image} alt={p.title} className="project-img" />
                <p className="domain">{p.domain}</p>
                <h3 className="project-title">{p.title}</h3>
              </motion.div>

              {/* BACK SIDE */}
              <motion.div className="flip-back">
                {Object.entries(p.back).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong>{" "}
                    {key === "Live" || key === "Github" ? (
                      <a href={value} target="_blank" rel="noreferrer">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </p>
                ))}
              </motion.div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const [flippedIndex, setFlippedIndex] = useState(null);

//   const projects = [
//     {
//       title: "Wonderlust",
//       domain: "FullStack Development",
//       image: "/images/lib.jpg",
//       description:
//         "Developed Wanderlust, a dynamic website enabling users to host listings and receive ratings and reviews. Integrated mapping functionality for seamless location services.",
//       tech: "HTML, CSS, Javascript, Node.js, Express, MongoDB",
//       live: "https://wonderlust-1-73w4.onrender.com/listings",
//       github: "https://github.com/jagan00002/Wonderlust",
//     },
//     {
//       title: "Weather Forecasting App",
//       domain: "Web App Development",
//       image: "/images/weather.jpg",
//       description: "Weather prediction app using OpenWeather API.",
//       tech: "React, API Integration, Tailwind",
//       live: "https://your-weather-app.com",
//       github: "https://github.com/your-weather-repo",
//     },
//     {
//       title: "Dog's Breed Classification",
//       domain: "Machine Learning",
//       image: "/images/dogs.jpg",
//       description: "CNN-based dog breed classifier with 90% accuracy.",
//       tech: "Python, TensorFlow, Flask",
//       live: "https://your-dog-classifier.com",
//       github: "https://github.com/your-ml-repo",
//     },
//   ];

//   const flipCard = (index) => {
//     setFlippedIndex(index === flippedIndex ? null : index);
//   };

//   return (
//     <section id="projects" className="section projects">
//       <h3 className="section-subtitle">Projects</h3>

//       <div className="project-grid">
//         {projects.map((p, idx) => (
//           <div
//             key={idx}
//             className={`flip-card ${flippedIndex === idx ? "flipped" : ""}`}
//             onClick={() => flipCard(idx)}
//           >
//             <div className="flip-inner">

//               {/* FRONT SIDE */}
//               <motion.div className="flip-front">
//                 <img src={p.image} alt={p.title} className="project-img" />
//                 <p className="domain">{p.domain}</p>
//                 <h3 className="project-title">{p.title}</h3>
//               </motion.div>

//               {/* BACK SIDE */}
//               <motion.div className="flip-back">
//                 <p>
//                   <strong>Description:</strong> {p.description}
//                 </p>

//                 <p>
//                   <strong>Tech Stack:</strong> {p.tech}
//                 </p>

//                 <button
//                   className="view-btn-project"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     window.open(p.live, "_blank");
//                   }}
//                 >
//                   View Project
//                 </button>

//                 <p style={{ marginTop: "12px" }}>
//                   <strong>Github:</strong>{" "}
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     {p.github}
//                   </a>
//                 </p>
//               </motion.div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
