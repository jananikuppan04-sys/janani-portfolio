import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { achievements, education } from "../data/portfolioData";

function Education() {
  return (
    <section className="section tinted-section" id="education">
      <div className="section-inner">
        <SectionHeading
          eyebrow="06 / Education & recognition"
          title="Strong academics. Proven build pressure."
          copy="Education paired with competitive environments where ideas had to become working prototypes."
        />
        <div className="credentials-grid">
          <div className="credential-panel panel reveal">
            <h3><GraduationCap size={20} />Education</h3>
            {education.map((item) => (
              <article key={item.school}>
                <span>{item.period}</span><h4>{item.credential}</h4><p>{item.school}</p><b>{item.detail}</b>
              </article>
            ))}
          </div>
          <div className="credential-panel panel reveal">
            <h3><Award size={20} />Selected achievements</h3>
            {achievements.map((item, index) => (
              <article className="achievement" key={item.title}>
                <i>0{index + 1}</i><div><h4>{item.title}</h4><p>{item.detail}</p><small>{item.context}</small></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
