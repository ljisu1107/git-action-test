import {cva, VariantProps} from "class-variance-authority";
import React from 'react';
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

const badgeVariants = cva(
  "px-2 py-1 text-xs font-medium bg-black text-white rounded-full",
  {
    variants:{
      variant:{
        secondary: "bg-gray-200 text-black",
        destructive: "bg-red-500 text-white",
        outline: "bg-transparent text-black border border-gray-200",
      }
    }
  }
);


type BadgeProps = VariantProps<typeof badgeVariants> & {
  children?: React.ReactNode,
  className?: string
}

export default function Badge({variant,className,children}:BadgeProps) {
  return (
    <div className={twMerge(clsx(badgeVariants({variant})),className)}>
      {children}
    </div>
  );
}
