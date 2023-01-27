import { useState } from "react"

const useCounter = () => {

    const [cont, setCont] = useState(0)

    const sumar = () => {

        setCont(prevState => prevState + 1)

    }

    const restar = () => {

        setCont(prevState => prevState - 1)

    }

    return {cont, sumar, restar}

}

export { useCounter }