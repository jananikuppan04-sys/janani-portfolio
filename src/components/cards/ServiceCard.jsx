import { BrainCircuit, Layers3, Server, Zap } from "lucide-react";

const icons = {
  brain: BrainCircuit,
  layers: Layers3,
  server: Server,
  zap: Zap,
};

function ServiceCard({ service, index }) {
  const Icon = icons[service.icon];

  return (
    <article className="service-card reveal">
      <div className="service-card-top">
        <span>0{index + 1}</span>
        <div className="service-icon">
          <Icon size={21} />
        </div>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <dl>
        <div>
          <dt>Best for</dt>
          <dd>{service.audience}</dd>
        </div>
        <div>
          <dt>You receive</dt>
          <dd>{service.deliverables}</dd>
        </div>
      </dl>
      <a href="#contact">Discuss your project →</a>
    </article>
  );
}

export default ServiceCard;
