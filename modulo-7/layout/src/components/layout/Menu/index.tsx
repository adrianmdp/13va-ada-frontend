
import { FC, useState } from "react";
import { Modal } from "../../common"
import { LoginForm } from "../../forms"

type Props = {
    page: string
    onChangePage: (value: string) => void
}


const Menu: FC<Props> = ( { page, onChangePage } ) => {
    
    const [isOpen, setIsOpen] = useState(false)


    const cambiarPagina = (p: string) => {
        onChangePage(p)
    //   setPage(p)
    }

    const abrirModal = () => {
        setIsOpen(true)
    }

    const cerrarModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className="main-menu">
                <div style={{color:'#FFF'}}>Estoy en la pagina: { page }</div>
                <ul className="navbar">
                    <li className="list-item">
                        <button className="link-item" onClick={() => cambiarPagina("Dashboard")}>
                            Home
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="link-item" onClick={() => cambiarPagina("Services")}>
                            Servicios
                        </button>
                    </li>
                    <li className="list-item">
                        <button className="link-item" onClick={() => cambiarPagina("Contact")}>
                            Contacto
                        </button>
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