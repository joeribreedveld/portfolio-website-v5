// Imports
import { IAppLayoutProps } from "./AppLayout.types";
import Navbar from "../Navbar/Navbar";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
};

// Exports
export default AppLayout;
