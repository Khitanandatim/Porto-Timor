import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import InfoCards from "./components/InfoCards";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LabGallery from "./components/LabGallery";

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <About />
        <Skills />
        <Timeline />
        <LabGallery />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
