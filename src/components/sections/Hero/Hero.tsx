// Imports
import Button from "../../common/Button/Button";
import Link from "next/link";

// Functions
const Hero = () => {
  return (
    <section className="section-py flex min-h-screen w-full flex-col justify-center gap-8">
      <section className="page-width flex flex-col gap-4">
        <h1>Frontend Developer</h1>
        <p>
          I like to make clean and structured websites for the ultimate user
          experience.
        </p>
      </section>
      <section className="page-width">
        <Link href="/" className="underline">
          Contact
        </Link>
      </section>
    </section>
  );
};

// Exports
export default Hero;
