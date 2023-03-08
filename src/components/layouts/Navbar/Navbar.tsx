// Imports
import Link from "next/link";
import Button from "../../common/Button/Button";
import { FiMenu } from "react-icons/fi";
import { INavbarListItemProps } from "./Navbar.types";

// Functions
const Navbar = () => {
  return (
    <nav className="default-shadow fixed z-[99] w-full bg-black py-6 text-white">
      <div className="navbar-width flex items-center justify-between">
        <section>
          <Link href="/">
            <h3 className="hidden md:block">Joeri Breedveld</h3>
            <h3 className="md:hidden">
              J<span className="underline">B</span>
            </h3>
          </Link>
        </section>
        <section className="hidden md:block">
          <ul className="flex gap-16">
            <NavbarListItem link="/" title="Home" />
            <NavbarListItem link="/" title="About" />
            <NavbarListItem link="/" title="Projects" />
            <NavbarListItem link="/" title="Experience" />
            <NavbarListItem link="/" title="Contact" />
          </ul>
        </section>
      </div>
    </nav>
  );
};

const NavbarListItem = ({ link, title }: INavbarListItemProps) => {
  return (
    <li>
      <Link className="hover:underline" href={link}>
        {title}
      </Link>
    </li>
  );
};

// Exports
export default Navbar;
