import { useCounter } from "../../hooks"
import "./styles.css"

const Card = () => {

    const { cont, restar, sumar } = useCounter()

    return (
        <div className="card">
            <strong>{cont}</strong>
            <button onClick={sumar}>
                Sumar
            </button>
            <button onClick={restar}>
                Restar
            </button>
        </div>
    )

}

export { Card }