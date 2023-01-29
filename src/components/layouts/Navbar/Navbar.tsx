// Imports
import Link from "next/link";

// Functions
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 py-4 px-16">
      <section>
        <Link href="/">
          <h3>Joeri Breedveld</h3>
        </Link>
      </section>
      <section>
        <ul className="flex gap-16">
          <NavbarListItem link="/" title="Home" />
          <NavbarListItem link="/" title="Over mij" />
          <NavbarListItem link="/" title="Mijn projecten" />
          <NavbarListItem link="/" title="Werkervaring" />
          <NavbarListItem link="/" title="Opleiding" />
        </ul>
      </section>
      <section>
        <div>Contact Button</div>
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
