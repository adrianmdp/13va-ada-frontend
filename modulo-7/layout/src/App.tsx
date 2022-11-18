import { Alert } from "./components/common";
import { Modal } from "./components/common/Modal";
import {  Dashboard,  } from "./pages";

function App() {

  return (
    <div className="App">
      <Dashboard />
      {/* <Services /> */}
      {/* <Contact /> */}

      <Modal title="Alerta: acción no permitida" isOpen={false} action={()=>{}}>
        <Alert>
          No se puede mostrar el contendio xq no inició sesión.
        </Alert>
      </Modal>

    </div>
  );
}

export default App;
