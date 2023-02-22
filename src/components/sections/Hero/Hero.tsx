// Imports
import Button from "../../common/Button/Button";

// Functions
const Hero = () => {
  return (
    <section className="page-width section-py flex min-h-screen flex-col justify-center gap-12">
      <section className="flex flex-col gap-4">
        <h1>Frontend Developer</h1>
        <p>
          I like to make clean and structured websites for the ultimate user
          experience.
        </p>
      </section>
      <Button variant="secondary">Contact</Button>
    </section>
  );
};

// Exports
export default Hero;
