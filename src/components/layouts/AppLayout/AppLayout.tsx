// Imports
import { IAppLayoutProps } from "./AppLayout.types";

// Functions
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <header>
        <div>Header</div>
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
