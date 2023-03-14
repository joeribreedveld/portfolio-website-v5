// Imports
import Link from "next/link";

// Functions
const Contact = () => {
  return (
    <section
      className="section-py flex flex-col gap-8 bg-bgSecondary"
      id="contact"
    >
      <section className="page-width">
        <h2>Contact</h2>
      </section>
      <section className="page-width flex flex-col gap-8">
        <p>Get in touch for more information</p>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="mailto:joeri.breedveld123@gmail.com"
              className="text-gray-500 underline"
            >
              joeri.breedveld123@gmail.com
            </Link>
          </li>
          <li>
            <Link href="tel:+31680056004" className="text-gray-500 underline">
              +31 6 80056004
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/joeribreedveld"
              className="text-gray-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub - joeribreedveld
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/joeribreedveld/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline"
            >
              LinkedIn - joeribreedveld
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

// Exports
export default Contact;
