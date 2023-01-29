// Imports
import { IButtonProps } from "./Button.types";

// Functions
const Button = ({
  children,
  className,
  onClick,
  type,
  disabled,
  loading,
  variant,
  size,
  fullWidth,
  as,
  href,
  target,
  rel,
}: IButtonProps) => {
  return <button className={`btn btn-primary ${className}`}>{children}</button>;
};

// Exports
export default Button;
