import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddTask, Categories, Dashboard, Login, SignUp, Users } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="users" element={<Users />} />
          <Route path="categories" element={<Categories />} /> 
          <Route path="add-task" element={<AddTask />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
