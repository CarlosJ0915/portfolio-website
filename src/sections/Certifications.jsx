import certifications from "../data/certifications";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <ul className="cert-list">
        {certifications.map((cert) => (
          <li key={cert.id} className="cert-card">
            {cert.image && (
              <a
                href={asset(cert.file || cert.image)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="cert-thumb"
                  src={asset(cert.image)}
                  alt={`${cert.title} certificate`}
                />
              </a>
            )}
            <div className="cert-body">
              <h3>{cert.title}</h3>
              <p className="cert-meta">
                {cert.issuer} · {cert.date} · {cert.length}
              </p>
              <p className="cert-meta">Instructor: {cert.instructor}</p>
              <ul className="tech-list">
                {cert.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="project-links">
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                    Verify credential
                  </a>
                )}
                {cert.file && (
                  <a href={asset(cert.file)} target="_blank" rel="noreferrer">
                    View certificate
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
