// Imports
import Link from "next/link";
import Button from "../../common/Button/Button";
import { FiMenu } from "react-icons/fi";

// Functions
const Navbar = () => {
  return (
    <nav className="default-shadow fixed flex w-full items-center justify-between bg-white px-8 py-4 md:px-16">
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
          <NavbarListItem link="/" title="Over mij" />
          <NavbarListItem link="/" title="Mijn projecten" />
          <NavbarListItem link="/" title="Werkervaring" />
          <NavbarListItem link="/" title="Opleiding" />
        </ul>
      </section>
      <section>
        <Button className="hidden md:block">Contact</Button>
        <FiMenu className="md:hidden" size={32} />
      </section>
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
