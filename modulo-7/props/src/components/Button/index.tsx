import { FC } from "react";
import Props from "./types";

const Button: FC<Props> = ({ variant, type, text }) => {
  return (
    <button className={`btn btn-${variant}`} type={type}>
      {text}
    </button>
  );
};

export { Button };
