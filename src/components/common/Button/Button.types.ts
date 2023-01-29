// Interfaces
interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: "noreferrer" | "noopener";
}

// Exports
export type { IButtonProps };
