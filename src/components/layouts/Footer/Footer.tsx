// Imports
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// Functions
const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 py-16">
      <section className="page-width flex flex-col items-center justify-center gap-8">
        <p>Designed & Built by Joeri Breedveld</p>
        <section className="flex gap-6 text-gray-500">
          <FiGithub size={24} />
          <FiLinkedin size={24} />
          <FiMail size={24} />
        </section>
      </section>
    </footer>
  );
};

// Exports
export default Footer;
