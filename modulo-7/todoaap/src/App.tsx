import { Outlet } from "react-router-dom";
import { Button, Footer, Header, Main, Menu } from "./components";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <Outlet />
        <Button
          variant="dark"
          icon="x-circle"
          handleClick={() => {
            console.log("Enviar");
            return ["Hola", "mundo"];
          }}
        >
          Enviar
        </Button>

        <Button
          variant="primary"
          icon="alarm"
          handleClick={() => {
            console.log("Inciar sesión");
            return [];
          }}
        >
          Iniciar Sesión
        </Button>
      </Main>
      <Footer />
    </>
  );
}

export default App;
