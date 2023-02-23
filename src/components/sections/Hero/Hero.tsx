// Imports
import Button from "../../common/Button/Button";
import Link from "next/link";

// Functions
const Hero = () => {
  return (
    <section className="section-py flex min-h-screen w-full flex-col justify-center gap-16 bg-bgSecondary">
      <section className="page-width flex flex-col gap-8">
        <h1>Frontend Developer</h1>
        <h3 className="font-primary font-normal">
          I like to make clean and structured websites for the ultimate user
          experience.
        </h3>
      </section>
      <section className="page-width">
        <Button variant="secondary">Reach out to me</Button>
      </section>
    </section>
  );
};

// Exports
export default Hero;
