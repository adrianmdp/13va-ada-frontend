import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const Menu: FC = () => {
  return (
    <>
      <nav className="main-menu">
        <div style={{ color: "#FFF" }}>Estoy en la pagina:</div>
        <ul className="navbar">
          <li className="list-item">
            <NavLink className="link-item" to="/categories">
              Categorías
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink className="link-item" to="/categories/save">
              Crear Categoría
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink className="link-item" to="/entertainment">
              Entretenimiento
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Menu };
