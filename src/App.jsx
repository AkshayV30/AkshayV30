import "./css/App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Certifications from "./Components/Certifications/Certifications";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
    </>
  );
}

export default App;
