// Imports
import Link from "next/link";

// Functions
const Contact = () => {
  return (
    <section className="section-py flex flex-col gap-16">
      <section className="page-width">
        <h2>Contact</h2>
      </section>
      <section className="page-width flex flex-col gap-8">
        <p>Get in touch for more information</p>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/" className="text-gray-500 underline">
              joeri.breedveld123@gmail.com
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-500 underline">
              +31 6 80056004
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

// Exports
export default Contact;
