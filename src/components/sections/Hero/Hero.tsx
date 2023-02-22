// Imports
import Button from "../../common/Button/Button";

// Functions
const Hero = () => {
  return (
    <section className="section-py flex min-h-screen w-full flex-col justify-center gap-12 bg-bgSecondary">
      <section className="page-width flex flex-col gap-4">
        <h1>Frontend Developer</h1>
        <p>
          I like to make clean and structured websites for the ultimate user
          experience.
        </p>
      </section>
      <section className="page-width">
        <Button variant="secondary">Contact</Button>
      </section>
    </section>
  );
};

// Exports
export default Hero;
