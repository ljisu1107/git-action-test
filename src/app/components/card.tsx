import clsx from "clsx";
import {twMerge} from "tailwind-merge";
import {cva} from "class-variance-authority";


type CardProps = {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};

const Card = ({
                children,
                variant = "default",
                padding = "md",
                radius = "md",
              }: CardProps) => {
  const cardVariants = cva(
    // 기본 스타일
    "overflow-hidden transition-all max-w-md",
    {
      variants:{
        padding:{
          none:"p-0",
          sm:"p-3",
          md:"p-5",
          lg:"p-8",
        },
        radius:{
          none:"rounded-none",
          sm:"rounded-sm",
          md:"rounded-md",
          lg:"rounded-lg",
          full:"rounded-full",
        },
        variant:{
          default:"bg-white border border-gray-200",
          outlined:"bg-white border border-gray-500 hover:border-gray-400 transition-colors",
          elevated:"bg-white shadow-lg hover:shadow-xl transition-shadow",
        },
      },
      // 기본값 설정
      defaultVariants: {
        variant: "default",
        padding: "md",
        radius: "md",
      },
    }
  );

  return <div className={twMerge(clsx(cardVariants({variant,padding,radius})))}>{children}</div>;
};

export default Card;
