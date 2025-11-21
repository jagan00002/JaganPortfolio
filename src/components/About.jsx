import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaPhoneAlt 
} from "react-icons/fa";

const experiences = [
  {
    company: "Vunet Systems",
    duration: "Aug 2025 – oct 2025",
    role: "Solution Engineer Intern",
    details: {
      Description:
        "Worked as a Trainee Solution Engineer contributing to the development and enhancement of business observability dashboards for enterprise clients. Involved in configuring monitoring solutions, optimizing system performance, and troubleshooting production issues. Collaborated with cross-functional teams to deploy and validate observability pipelines while ensuring system reliability, scalability, and data accuracy.",
      Skills: "Linux, Networking, Docker & containers, Kubernetes, MySQL, Clickhouse, Kafka, Grafana, GitHub",
      Certified: "vuSmartMaps Administration Certification. ",
      // <a href="">Link</a>
    },
  },
  {
    company: "Rooman Technologies",
    duration: " Oct 2024 – Feb 2025",
    role: "AIML Engineer Intern",
    details: {
      Description:
        "Worked on developing and optimizing ML models, performing end-to-end data preprocessing using Python and SQL. Contributed to building structured datasets, feature engineering, and automating model training and evaluation workflows to improve efficiency and reproducibility.",
      Skills: "Python, SQL, Machine Learning, Frontend, Prompt Engineering",
      Certified: "Rooman Technologies. ",
    },
  },
];

export default function About() {
  const [openCards, setOpenCards] = useState(
    Array(experiences.length).fill(false)
  );

  const toggleCard = (index) => {
    const updated = [...openCards];
    updated[index] = !updated[index];
    setOpenCards(updated);
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="section about">
        <h3 className="section-subtitle">ABOUT ME</h3>

        <motion.div
          className="about-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-left">
            <div className="card">
              <p>
              I am a passionate full-stack developer with strong skills in Java, JavaScript, Node.js, Express.js, and MongoDB, along with practical experience in building REST APIs, scalable backends, and clean, responsive front-end interfaces using HTML, CSS, and Bootstrap.
                <br />
                With a solid foundation in OOPS, DSA, operating systems, computer networks, Git/GitHub, JEE, and JSP, I focus on writing efficient, maintainable, and production-ready code. <br/>
                I am always eager to learn, explore new technologies, and contribute to building meaningful software that improves user experience and system performance.
              </p>

              {/* SOCIAL + PHONE */}
              <div className="about-inner-icons">


                <a href="https://www.linkedin.com/in/jagannath-g-h-2ab96a253" target="_blank"  rel="noopener noreferrer">
                  <FaLinkedin />
                </a>

                {/* CLICKABLE PHONE NUMBER */}
                <a href="tel:+918951063319">
                  <FaPhoneAlt />
                </a>

                <a href="https://github.com/jagan00002" target="_blank"  rel="noopener noreferrer">
                  <FaGithub />
                </a>

                <a href="https://www.instagram.com/____the__emperor__/?igsh=c2U3ajR6bm96bHlt#" target="_blank"  rel="noopener noreferrer">
                  <FaInstagram />
                </a>

                <a href="https://twitter.com/Jagan1555471
" target="_blank"  rel="noopener noreferrer">
                  <FaTwitter />
                </a>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section experience">
        <h3 className="section-subtitle">Experience</h3>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              className={`experience-card ${openCards[index] ? "open" : ""}`}
              key={exp.company}
            >
              <div className="experience-company">{exp.company}</div>

              <div className="experience-meta">
                <span>{exp.role}</span>
                <span>{exp.duration}</span>
              </div>

              {!openCards[index] && (
                <button
                  className="view-btn"
                  onClick={() => toggleCard(index)}
                >
                  View More
                </button>
              )}

              <motion.div
                className="exp-wrapper"
                initial={false}
                animate={{
                  height: openCards[index] ? "auto" : 0,
                  opacity: openCards[index] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {openCards[index] && (
                  <div className="exp-details">
                    {Object.entries(exp.details).map(([key, value]) => (
                      <p key={key}>
                        <strong>{key}: </strong> {value}
                      </p>
                    ))}

                    <button
                      className="view-btn"
                      onClick={() => toggleCard(index)}
                    >
                      View Less
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
