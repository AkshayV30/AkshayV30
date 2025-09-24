import "./css/App.css";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navigation from "./components/Navigation/Navigation";

import Typewriter from "./components/Effects/Typewriter";
import { FiChevronDown } from "react-icons/fi";

import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUser,
  FaFileAlt,
  FaBook,
  FaServer,
  FaEnvelope,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button
        className="fixed top-4 left-4 z-50 text-white text-2xl lg:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <FaBars />
      </button>

      {/* Header */}
      <header
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col justify-center transition-transform duration-300 lg:translate-x-0 "
        style={{ transform: isNavOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <nav className="navbar p-5">
          <ul className="space-y-4">
            <li>
              <a
                href="#hero"
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <FaHome />
                from home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <FaUser />
                <About />
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <FaServer />
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <FaEnvelope />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-white "
      >
        <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
          <Home />

          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* downward arrow */}
      <div className="scroll-icon flex flex-col items-center">
        <FiChevronDown size={42} color="#444" />
      </div>

      {/* Footer */}

      <footer className="site-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
