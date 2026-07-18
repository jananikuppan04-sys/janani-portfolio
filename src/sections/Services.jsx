import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import { services } from "../data/portfolioData";

function Services() {
  return (
    <section className="section tinted-section" id="services">
      <div className="section-inner">
        <SectionHeading
          eyebrow="02 / Freelance services"
          title="From a sharp idea to a working product."
          copy="Focused builds for businesses, founders and teams that need a practical technical partner."
        />
        <div className="service-grid">
          {services.map((service, index) => <ServiceCard service={service} index={index} key={service.title} />)}
        </div>
      </div>
    </section>
  );
}

export default Services;
