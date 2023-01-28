import { createContext, useState } from "react";

const StoreContext = createContext({
    tasks: [],
    loadTasks: (t) => undefined
})

const StoreProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const loadTasks = (t) => {
        setTasks(t)
    }
    
    return (
        <StoreContext.Provider value={{ tasks, loadTasks }}>
            {children}
        </StoreContext.Provider>
    )

}

export { StoreContext, StoreProvider }