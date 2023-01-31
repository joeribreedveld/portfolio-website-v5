// Imports
import { type NextPage } from "next";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

// Exports
export default Home;
