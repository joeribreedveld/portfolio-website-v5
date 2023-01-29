// Imports
import { IAppLayoutProps } from "./AppLayout.types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

// Exports
export default AppLayout;
