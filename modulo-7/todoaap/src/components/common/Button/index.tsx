import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  variant: "primary" | "secondary" | "default" | "dark";
  icon?: "alarm" | "x-circle";
  handleClick: (value: number) => string[];
};

const Button: FC<Props> = ({ children, variant, icon, handleClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={() => handleClick(123)}>
      {children}
      {icon && <i className={`bi bi-${icon} ms-2`}></i>}
    </button>
  );
};

export { Button };
