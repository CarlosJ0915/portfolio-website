import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <ul className="experience-list">
        {experience.map((item) => (
          <li key={item.id} className="experience-item">
            <h3>{item.title}</h3>
            <p className="experience-meta">
              {item.organization} · {item.period}
            </p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
