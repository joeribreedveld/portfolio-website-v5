// Imports
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// Functions
const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 bg-bgSecondary py-16">
      <section className="page-width flex items-center justify-center">
        <h3>Neem contact op</h3>
      </section>
      <section className="page-width flex flex-col gap-4">
        <div className="default-rounding flex w-full items-center justify-center border border-gray-200 bg-white py-6 px-6">
          <p>+31 6 80056004</p>
        </div>
        <div className="default-rounding flex w-full items-center justify-center border border-gray-200 bg-white py-6 px-6">
          <p>joeri.breedveld123@gmail.com</p>
        </div>
      </section>
      <section className="page-width flex flex-col items-center justify-center gap-8">
        <p className="text-sm">Designed & Built by Joeri Breedveld</p>
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
