// Imports
import { ICustomLinkProps } from "./CustomLink.types";
import Link from "next/link";

// Functions
const CustomLink = ({
  children,
  href,
  rel,
  className,
  target,
  variant,
}: ICustomLinkProps) => {
  return (
    <Link
      href={href ? href : ""}
      rel={rel}
      className={`${className ? className : ""} ${"flex gap-4"}`}
      target={target}
    >
      <span>{"->"}</span>
      <p className="underline">{children}</p>
    </Link>
  );
};

// Exports
export default CustomLink;
