import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { person } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home">
        <span className="brand-mark" aria-hidden="true"><span>J</span><span>K</span></span>
        <span className="brand-copy"><strong>Janani Kuppan</strong><small>AI × Full Stack</small></span>
      </a>
      <p>Designed and built by Janani Kuppan.</p>
      <div>
        <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        <a href={`mailto:${person.email}`} aria-label="Email"><Mail /></a>
        <a href="#home" aria-label="Back to top"><ArrowUp /></a>
      </div>
    </footer>
  );
}

export default Footer;
