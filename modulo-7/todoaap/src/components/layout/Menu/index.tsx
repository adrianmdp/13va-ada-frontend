
import { FC, useState } from "react";
import { NavLink } from 'react-router-dom'

const Menu: FC = () => {
    return (
        <>
            <nav className="main-menu">
                <div style={{color:'#FFF'}}>Estoy en la pagina:</div>
                <ul className="navbar">
                    <li className="list-item">
                        <NavLink className="link-item" to="/sport">
                            Deportes
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="link-item" to="/Music">
                            Musica
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
    )

}

export { Menu }