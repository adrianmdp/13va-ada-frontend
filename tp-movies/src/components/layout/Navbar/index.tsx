import { Navbar as NavbarBTS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBTS bg="light" expand="lg">
      <Container fluid>
        <NavbarBTS.Brand href="#home">TP Movies</NavbarBTS.Brand>
        <NavbarBTS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBTS.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Registro
            </NavLink>
            <NavLink className="nav-link" to="/upcoming">
              Próximamente
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Populares
            </NavLink>
            <NavLink className="nav-link" to="/add-task">
              Buscar
            </NavLink>
          </Nav>
        </NavbarBTS.Collapse>
      </Container>
    </NavbarBTS>
  );
};

export { Navbar };
