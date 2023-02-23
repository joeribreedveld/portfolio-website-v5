// Imports
import { type NextPage } from "next";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact/Contact";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

// Exports
export default Home;
