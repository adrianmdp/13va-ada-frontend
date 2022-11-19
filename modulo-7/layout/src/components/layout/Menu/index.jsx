
import { useState } from "react";
import { Modal } from "../../common"
import { LoginForm } from "../../forms"

const Menu = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const abrirModal = () => {
        setIsOpen(true)
    }

    const cerrarModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className="main-menu">
                <ul className="navbar">
                    <li className="list-item">
                        <a className="link-item" href="/test">Item de menu</a>
                    </li>
                    <li className="list-item">
                        <a className="link-item" href="/test">Item de menu</a>
                    </li>
                    <li className="list-item">
                        <button className="link-item" onClick={abrirModal}>Iniciar sesión</button>
                    </li>
                </ul>
            </nav>
            <Modal title="Inicie sesión para continuar" isOpen={isOpen} action={()=>{}}>
                <button onClick={cerrarModal}>X</button>
                <LoginForm />
            </Modal>
        </>
    )

}

export { Menu }