// Imports
import { type NextPage } from "next";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact/Contact";
import Experience from "../components/sections/Experience/Experience";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

// Exports
export default Home;
