import { useCounter } from "../../hooks"
import "./styles.css"

const Card = () => {

    const counter = useCounter()

    return (
        <div className="card">
            <strong>{counter.cont}</strong>
            <button onClick={() => counter.sumar()}>Sumar</button>
            <button onClick={() => counter.restar()}>Restar</button>
        </div>
    )

}

export { Card }