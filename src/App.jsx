import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Skills />
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
