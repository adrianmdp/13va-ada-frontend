import { useContext, useState } from "react"
import { CounterContext } from "../../contexts"

const useCounter = () => {

    const {count, setCount} = useContext(CounterContext)
    // const [count, setCount] = useState(0)


    const sumar = () => {

        setCount(prevState => prevState + 1)

    }

    const restar = () => {

        setCount(prevState => prevState - 1)

    }

    return {count, sumar, restar}

}

export { useCounter }