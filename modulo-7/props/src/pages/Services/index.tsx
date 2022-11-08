import { FC } from "react";
import { Button } from "../../components";

const Services: FC = () => {
  return (
    <div className="services page">
      <h1>Servicios</h1>

      <Button text="Botón en servicios" type="button" variant="warning" />
    </div>
  );
};

export { Services };
