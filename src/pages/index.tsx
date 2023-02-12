// Imports
import { type NextPage } from "next";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Projects from "../components/sections/Projects/Projects";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

// Exports
export default Home;
