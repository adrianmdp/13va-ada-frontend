import { useState } from "react";
import { Alert } from "./components/common";
import { Modal } from "./components/common";
import {  Contact, Dashboard, Services,  } from "./pages";

function App() {

  const [page, setPage] = useState("Dashboard")

  const cambiarPagina = (p: string) => {
    setPage(p)
  }

  return (
    <div className="App">
      <nav>
        <button onClick={() => cambiarPagina("Dashboard")}>
          Dashboard
        </button>
        <button onClick={() => cambiarPagina("Services")}>
          Services
        </button>
        <button onClick={() => cambiarPagina("Contact")}>
          Contact
        </button>
      </nav>
      { page === "Dashboard" && <Dashboard /> }
      { page === "Services" && <Services /> }
      { page === "Contact" && <Contact /> }

      <Modal title="Alerta: acción no permitida" isOpen={false} action={()=>{}}>
        <Alert>
          No se puede mostrar el contendio xq no inició sesión.
        </Alert>
      </Modal>

    </div>
  );
}

export default App;
