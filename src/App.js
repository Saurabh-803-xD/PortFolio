import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Components/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import ScrollToTop from "./Pages/ScrollToTop";

import "./Pages/stars.scss"
function App() {
  return (
      <>
      <Header />
      <div id="stars" />
      <div id="stars2" />
      <Home/>
      <div id="about"></div>
      <About/>
      <div id="skills"></div>
      <Technologies/>
      <div id="projects"></div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Projects/>
      <div id="contact"></div>
      <Contact/>
      <Footer />
      <ScrollToTop />
      </>
  );
}

export default App;