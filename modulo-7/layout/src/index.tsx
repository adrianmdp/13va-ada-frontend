import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import {  AddCategory, AddUser, Admin, Contact, Dashboard, Services, UpdateUser, Users,  } from "./pages";
import { Alert } from "./components/common";
import { Modal } from "./components/common";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="add-category" element={<AddCategory />} />

        <Route path='users/'>
          <Route index element={<Users />} />
          <Route path='add-user' element={<AddUser />} />
          <Route path='update-user' element={<AddUser />} />
          <Route path='remove-user' element={<AddUser />} />
          <Route path='pepe' element={<AddUser />} />
        </Route>

        <Route path='admin/' element={<Admin />}>
          <Route path='add-category' element={<AddCategory />} />
          <Route path='add-user' element={<AddUser />} />
        </Route>

      </Route>



























      {/* <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="add-category" element={<AddCategory />} />
        
        <Route path="users/">
          <Route index element={<Users />} />
          <Route path="add" element={<AddUser />} />
          <Route path="update" element={<UpdateUser />} />
        </Route>
      </Route> */}
    </Routes>

    <Modal title="Alerta: acción no permitida" isOpen={false} action={()=>{}}>
        <Alert>
          No se puede mostrar el contendio xq no inició sesión.
        </Alert>
      </Modal>
  </BrowserRouter>
);


