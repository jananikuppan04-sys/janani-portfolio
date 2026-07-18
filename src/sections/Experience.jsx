import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

function Experience() {
  return (
    <section className="section tinted-section" id="experience">
      <div className="section-inner">
        <SectionHeading
          eyebrow="04 / Experience"
          title="Java foundations applied through practice."
          copy="Keep this section factual and update it with dates and responsibilities from your internship certificate."
        />
        <div className="timeline reveal">
          <div className="timeline-node"><BriefcaseBusiness size={18} /></div>
          <div className="timeline-card">
            <span>Internship</span>
            <h3>Java Developer Intern</h3>
            <h4>Rejola</h4>
            <p>Completed Java-focused practical learning and project work covering object-oriented programming, problem solving and backend foundations.</p>
            <div className="chip-list"><span>Java</span><span>OOP</span><span>Problem Solving</span><span>Backend Foundations</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
