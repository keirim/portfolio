import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Tilt } from "react-tilt";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hover" | "interactive";
  onClick?: () => void;
  tilt?: boolean;
  tiltOptions?: {
    max?: number;
    scale?: number;
    speed?: number;
  };
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
  variant = "default",
  onClick,
  tilt = false,
  tiltOptions = {
    max: 15,
    scale: 1.05,
    speed: 1000,
  },
}: CardProps) {
  const cardContent = (
    <div
      onClick={onClick}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        variant === "hover" &&
          "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        variant === "interactive" &&
          "cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      {children}
    </div>
  );

  if (tilt) {
    return (
      <Tilt
        tiltMaxAngleX={tiltOptions.max}
        tiltMaxAngleY={tiltOptions.max}
        perspective={1000}
        scale={tiltOptions.scale}
        transitionSpeed={tiltOptions.speed}
        gyroscope={true}
      >
        {cardContent}
      </Tilt>
    );
  }

  return cardContent;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
}
