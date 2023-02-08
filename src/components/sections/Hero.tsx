// Imports
import Button from "../common/Button/Button";

// Functions
const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-bgSecondary py-16 pt-32 md:pt-36">
      <section className="flex flex-col items-center justify-center gap-16">
        <section className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-6xl">Joeri Breedveld</h1>
          <h3 className="text-3xl font-normal">Full Stack Developer</h3>
        </section>
        <Button variant="secondary">Contact</Button>
      </section>
    </section>
  );
};

// Exports
export default Hero;
