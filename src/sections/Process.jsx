import SectionHeading from "../components/common/SectionHeading";
import { process } from "../data/portfolioData";

function Process() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="07 / How I work"
        title="A clear path from problem to delivery."
        copy="Simple communication, controlled scope and visible progress throughout the build."
      />
      <div className="process-grid">
        {process.map(([number, title, detail]) => (
          <article className="process-card reveal" key={number}>
            <span>{number}</span><div /><h3>{title}</h3><p>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
