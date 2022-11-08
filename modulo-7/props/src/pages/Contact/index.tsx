import { FC } from "react";
import { Button, Input } from "../../components";

const Contact: FC = () => {
  return (
    <div className="contact page">
      <h1>Contacto</h1>

      <form action="">
        <Input
          id="control-name"
          label="Nombre"
          name="name"
          placeholder="Ingresar Nombre"
          type="text"
        />

        <Input
          id="control-pass"
          name="pass"
          placeholder="Ingresar contraseña"
          type="password"
        />
        <Button text="Enviar" variant="primary" type="submit" />
      </form>
    </div>
  );
};

export { Contact };
