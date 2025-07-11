import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  value?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  value,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
