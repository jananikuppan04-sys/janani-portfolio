import Header from "./components/layout/Header";
import PortfolioAssistant from "./components/common/PortfolioAssistant";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Process />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
    </>
  );
}

export default App;
