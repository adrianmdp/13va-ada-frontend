import { useState } from "react";
import { Alert } from "./components/common";
import { Modal } from "./components/common";
import {  AddCategory, Contact, Dashboard, Services,  } from "./pages";

function App() {

  const [page, setPage] = useState("AddCategory")

  const funcionDePrueba = (value: string) => {
    setPage(value)
  }

  return (
    <div className="App">

      <div>Estoy en App</div>


      { page === "Dashboard" && 
        <Dashboard page={page} onChangePage={funcionDePrueba} /> }

      
      { page === "Services" && 
        <Services page={page} onChangePage={funcionDePrueba} /> }

      
      { page === "Contact" && 
        <Contact page={page} onChangePage={funcionDePrueba} /> }

      { page === "AddCategory" && 
        <AddCategory page={page} onChangePage={funcionDePrueba} /> }




      <Modal title="Alerta: acción no permitida" isOpen={false} action={()=>{}}>
        <Alert>
          No se puede mostrar el contendio xq no inició sesión.
        </Alert>
      </Modal>

    </div>
  );
}

export default App;
