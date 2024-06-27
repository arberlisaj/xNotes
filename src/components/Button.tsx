import { ReactNode } from "react";

interface Props {
  title?: string;
  className?: string;
  children: ReactNode;
  handleClick?: () => void;
  type: "submit" | "reset" | "button";
}

const Button = ({ children, handleClick, className, type, title }: Props) => {
  return (
    <button
      type={type}
      title={title}
      className={
        className +
        " rounded-sm py-1.5 px-3 flex items-center border-none gap-1 text-sm"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
