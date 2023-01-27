import { useContext } from "react"
import { AuthContext, ModalContext } from "../../contexts"
import { useCounter } from "../../hooks"
import "./styles.css"

const Card = () => {

    const { count, restar, sumar } = useCounter()

    const modal = useContext(ModalContext)

    const auth = useContext(AuthContext)

    return (
        <div className="card">
            <strong>{count}</strong>
            <button onClick={sumar}>
                Sumar
            </button>
            <button onClick={restar}>
                Restar
            </button>

            <button onClick={() => modal.mostrarModal()}>Abrir modal</button>
            <button onClick={() => modal.cerrarModal()}>Cerrar modal</button>
            <button onClick={() => auth.setSessionToken("iwiwiwiwiwiwiwiwiwi")}>Cambiar token</button>
            <div>
                <h2>{modal.isModalOpen ? 'TRUE' : 'FALSE'}</h2>
                <h2>{auth.sessionToken}</h2>
            </div>
        </div>
    )

}

export { Card }