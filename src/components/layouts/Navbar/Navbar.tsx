// Imports
import { INavbarListItemProps } from "./Navbar.types";
// link from react scroll
import { Link, animateScroll as scroll } from "react-scroll";

// Functions
const Navbar = () => {
  return (
    <nav
      className="default-shadow absolute z-[99] w-full bg-black py-6 text-white"
      id="navbar"
    >
      <div className="navbar-width flex items-center justify-between">
        <section>
          <Link
            to="hero"
            className="hover:cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h3 className="hidden md:block">Joeri Breedveld</h3>
            <h4 className="md:hidden">Joeri Breedveld</h4>
          </Link>
        </section>
        <section className="hidden md:block">
          <ul className="flex gap-16">
            <NavbarListItem to="hero" title="Home" />
            <NavbarListItem to="about" title="About" />
            <NavbarListItem to="projects" title="Projects" />
            <NavbarListItem to="experience" title="Experience" />
            <NavbarListItem to="contact" title="Contact" />
          </ul>
        </section>
      </div>
    </nav>
  );
};

const NavbarListItem = ({ to, title }: INavbarListItemProps) => {
  return (
    <li>
      <Link
        className="hover:cursor-pointer hover:underline"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
      >
        {title}
      </Link>
    </li>
  );
};

// Exports
export default Navbar;
