import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-emphasis shadow-card hover:shadow-hover",
        primary: "bg-primary text-white hover:bg-primary-emphasis shadow-card hover:shadow-hover transform hover:scale-[1.02] transition-bounce",
        secondary: "bg-secondary text-neutral-100 hover:bg-accent shadow-card hover:shadow-hover transform hover:scale-[1.02] transition-bounce",
        outline: "border-2 border-neutral-30 text-neutral-30 hover:bg-neutral-30 hover:text-neutral-100 transition-smooth",
        ghost: "text-neutral-30 hover:bg-neutral-70 hover:text-white transition-smooth",
        hero: "bg-gradient-to-r from-primary to-primary-emphasis text-white hover:shadow-glow transform hover:scale-[1.02] transition-bounce font-bold",
        cta: "bg-gradient-to-r from-secondary to-accent text-neutral-100 hover:shadow-glow transform hover:scale-[1.02] transition-bounce font-bold animate-glow",
      },
      size: {
        default: "h-11 px-6 py-3 text-body rounded-md",
        sm: "h-9 px-4 py-2 text-caption rounded-sm",
        lg: "h-14 px-8 py-4 text-body-lg rounded-lg",
        xl: "h-16 px-10 py-5 text-h3 rounded-lg",
        icon: "h-11 w-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
