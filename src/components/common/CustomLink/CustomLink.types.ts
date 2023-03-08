// Interfaces
interface ICustomLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  variant?: "primary" | "arrow";
}

// Exports
export type { ICustomLinkProps };
