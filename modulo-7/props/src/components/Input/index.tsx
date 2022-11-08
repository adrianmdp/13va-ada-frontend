import { FC } from "react";
import Props from "./type";

const Input: FC<Props> = ({ type, name, placeholder, id, label }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className="form-control"
      />
    </div>
  );
};

export { Input };
