import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
}) => {
  return (
    <button
      type={type}
      className={`flex text-white font-medium border-0 py-2 px-4 focus:outline-none hover:bg-primary rounded-lg  duration-200 text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
