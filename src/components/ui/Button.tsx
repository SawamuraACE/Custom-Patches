import * as React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-orange disabled:pointer-events-none disabled:opacity-50",
          {
            // PRIMARY: Orange background, white text, darker red on hover
            "bg-brand-orange text-white hover:bg-brand-red shadow-md rounded-lg":
              variant === "primary",
            // OUTLINE: Orange border, dark text, full orange on hover with white text
            "border-2 border-brand-orange text-brand-dark hover:bg-brand-orange hover:text-white rounded-lg":
              variant === "outline",
            // GHOST: No background, dark text, light background on hover
            "text-brand-dark hover:bg-gray-100 rounded-lg": variant === "ghost",
            // Sizes
            "h-8 px-4 text-sm": size === "sm",
            "h-10 px-6 text-base": size === "md",
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
