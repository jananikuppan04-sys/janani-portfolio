import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, person } from "../../data/portfolioData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Janani Kuppan home">
        <span className="brand-mark" aria-hidden="true">
          <span>J</span>
          <span>K</span>
        </span>
        <span className="brand-copy">
          <strong>Janani Kuppan</strong>
          <small>AI × Full Stack</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <a className="resume-button" href={person.resume} download>
        Resume <Download size={17} />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href={person.resume} download onClick={() => setMenuOpen(false)}>
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
