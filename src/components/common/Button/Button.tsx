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
  return (
    <button
      className={`btn ${
        variant === "secondary" ? `btn-secondary` : "btn-primary"
      } ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

// Exports
export default Button;
