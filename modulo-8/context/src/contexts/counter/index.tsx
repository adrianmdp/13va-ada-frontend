import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react"

type ContextType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
}

const CounterContext = createContext<ContextType>({ 
    count: 0,
    setCount: () => 0
})

type Props = {
    children: ReactNode
}

const CounterProvider: FC<Props> = ({children}) => {

    const [count, setCount] = useState(0)

    return(
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )

}

export { CounterProvider, CounterContext }