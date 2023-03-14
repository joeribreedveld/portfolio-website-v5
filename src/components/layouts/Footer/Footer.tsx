// Imports
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";

// Functions
const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 py-16" id="footer">
      <section className="page-width flex flex-col items-center justify-center gap-8">
        <p>Designed & Built by Joeri Breedveld</p>
        <section className="flex gap-6 text-gray-500">
          <Link
            href="https://github.com/joeribreedveld"
            target="_blank"
            rel="noopener norefferer"
          >
            <FiGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joeribreedveld/"
            target="_blank"
            rel="noopener norefferer"
          >
            <FiLinkedin size={24} />
          </Link>
          <Link href="mailto:joeri.breedveld123@gmail.com">
            <FiMail size={24} />
          </Link>
        </section>
      </section>
    </footer>
  );
};

// Exports
export default Footer;
