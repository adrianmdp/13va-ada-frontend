import { useEffect, useState } from "react";
import { Componente1 } from "./Component1";
import { Componente2 } from "./Component2";
import { Componente3 } from "./Component3";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(true);
  const [isActive3, setIsActive3] = useState(false);
  const [theme, setTheme] = useState("light");

  const cambiarEstado = () => {
    setIsActive(!isActive);
  };

  const cambiarEstado2 = () => {
    setIsActive2(!isActive2);
  };

  const cambiarEstado3 = () => {
    setIsActive3(!isActive3);
  };

  useEffect(() => {
    isActive && console.log("Me muestro cuando el isActive esta en true");
  }, [isActive]);

  useEffect(() => {
    isActive2 && console.log("Me muestro cuando el isActive2 esta en true");
  }, [isActive2]);

  const cambiarTema = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <Componente1 isActive={isActive} />
      <hr />
      <Componente2 />
      <hr />
      {isActive && <Componente3 />}

      <button onClick={cambiarEstado}>Cambiar estado de app</button>
      <button onClick={cambiarEstado2}>Cambiar estado2 de app</button>
      <button onClick={cambiarEstado3}>Cambiar estado3 de app</button>
      <br />
      {isActive ? "isActive es true" : "isActive es false"}
      <br />
      {isActive2 ? "isActive2 es true" : "isActive2 es false"}
      <br />
      {isActive3 ? "isActive3 es true" : "isActive3 es false"}
      <hr />
      <button onClick={cambiarTema}>Cambiar Tema</button>
    </div>
  );
};

export default App;
