// Reusable Button component supporting both <button> and <Link> (via href)
import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string; // If provided, renders as a link
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean; // Opens link in new tab
  fullWidth?: boolean;
}

// Each variant maps to a set of Tailwind classes
const variantStyles: Record<string, string> = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-[#005CE6] text-white hover:bg-[#0047B3]",
  outline: "border border-black bg-transparent text-black hover:bg-gray-50",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  white: "bg-white text-[#005CE6] hover:bg-gray-100",
};

const sizeStyles: Record<string, string> = {
  sm: "rounded-full px-4 py-2 text-xs",
  md: "rounded-full px-6 py-3 text-sm",
  lg: "rounded-full px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className,
  disabled = false,
  type = "button",
  external = false,
  fullWidth = false,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex select-none items-center justify-center font-medium transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "pointer-events-none cursor-not-allowed opacity-50",
    className,
  );

  // Render as external anchor
  if (href && external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Render as Next.js Link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Render as HTML button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
