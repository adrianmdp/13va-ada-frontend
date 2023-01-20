import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header, Main, Menu, ModalLogin } from "./components";
import { useAuth } from "./hooks";

function App() {

  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if(!auth.isUserLoggedIn) navigate('/login')
  }, [auth.isUserLoggedIn, navigate])

  return (
    <>
      <Header />
      <Menu />
      <Main>
        <div className="container">
          <Outlet />
          {/* <ModalLogin /> */}
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;
