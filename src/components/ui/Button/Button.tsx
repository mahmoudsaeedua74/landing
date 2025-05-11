import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap l transition-colors focus-visible:outline-none focus-visible:ring-1 ",
  {
    variants: {
      variant: {
        default: "bg-main text-white shadow ",
        textMain: "bg-second-color text-main-color hover:bg-second-color/90",
        second: "bg-main-color text-white hover:bg-main-color/90 ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: " rounded-full px-8 text-[20px]",
        lg: "h-10 rounded-full px-8 text-[23px]", //need
        xl: "px-14 py-2 text-[23px] rounded-full font-bold", //need
        second:"lg:px-20 md:px-16 px-6 lg:text-[30px] text-[20px]  lg:text-[40px] rounded-full font-semibold ",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
