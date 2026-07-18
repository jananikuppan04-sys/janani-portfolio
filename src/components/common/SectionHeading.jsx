function SectionHeading({ eyebrow, title, copy }) {
  return (
    <header className="section-heading reveal">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <span>{copy}</span>}
    </header>
  );
}

export default SectionHeading;
