export default function Skills() {
  const skills = [
    "Front-end development","Back-end development","MySQL",
    "MongoDB","Git/GitHub", "Java", "JavaScript","OOPS","DSA","Operating Systems","Computer networks",
    "JEE","JSP","Linux","Docker","Kubernetes","Kafka","Grafana","Clickhouse"
  ];

  return (
    <section id="skills" className="skills-wrapper">

{/* <h3 className="section-subtitle">Skills</h3> */}
{/* <h3 className="section-subtitle skills-heading">Skills</h3> */}
<h2 className="skills-title">Skills</h2>

      <div className="skills-section">
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}