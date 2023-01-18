import { FC, useEffect, useState } from "react";

const person = {
  name: "Adrián",
  email: "asd@asd.com",
  lastname: "Solimano",
};

const person2 = {
  name: "Sofi",
  email: "asd@asd.com",
  lastname: "Ferrer",
};

type Props = {
  isActive: boolean;
};

const Componente1: FC<Props> = ({ isActive }) => {
  const [user, setUser] = useState(person);

  const cambiarSaludo = () => {
    setUser(person2);
  };

  useEffect(() => {
    console.log("Estoy en el componente 1");
  }, [isActive]);

  return (
    <>
      <div>Componente 1 - {user.name}</div>
      <button onClick={cambiarSaludo}>Cambiar saludo de comp1</button>
    </>
  );
};

export { Componente1 };
