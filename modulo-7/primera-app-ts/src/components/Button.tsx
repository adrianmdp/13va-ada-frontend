import { FC } from "react";

type Props = {
  clase: string;
  tipo: "submit" | "reset" | "button";
  texto: string;
};

const Button: FC<Props> = (props) => {
  return (
    <button className={props.clase} type={props.tipo}>
      {props.texto}
    </button>
  );
};

export default Button;
