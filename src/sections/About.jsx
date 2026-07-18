import { BrainCircuit, ShieldCheck, Trophy } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="01 / About"
        title="Engineering with purpose, learning by shipping."
        copy="I’m building depth across product engineering and applied AI—one practical system at a time."
      />
      <div className="about-grid">
        <article className="about-story panel reveal">
          <span className="panel-label">My direction</span>
          <p>
            I’m a Computer Science Engineering undergraduate building practical
            products across full-stack development and applied AI. My work spans
            responsive React interfaces, Node.js APIs, Python intelligence and
            Java backend development.
          </p>
          <div><ShieldCheck size={20} />I value honest product claims and software that can be tested and deployed.</div>
        </article>
        <article className="about-stat panel reveal"><strong>8.85</strong><span>Current B.E. CGPA</span><small>Computer Science & Engineering</small></article>
        <article className="about-stat panel reveal"><Trophy size={25} /><strong>SIH ’25</strong><span>Winner</span><small>National hackathon</small></article>
        <article className="about-focus panel reveal">
          <div><BrainCircuit size={19} />Current focus</div>
          <p><span>AI product engineering</span><span>RAG assistants</span><span>Java backends</span><span>Deployable MVPs</span></p>
        </article>
      </div>
    </section>
  );
}

export default About;
