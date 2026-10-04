import experience from "../data/experience";

function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-brand">Portfolio</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        {experience.length > 0 && (
          <li><a href="#experience">Experience</a></li>
        )}
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
