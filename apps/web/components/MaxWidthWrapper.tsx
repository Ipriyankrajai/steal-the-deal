import { cn } from "@steal-the-deal/ui/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("h-full mx-auto w-full max-w-screen-xl px-5", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
