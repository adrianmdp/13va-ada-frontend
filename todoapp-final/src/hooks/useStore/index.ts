import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../contexts"
import { servicesTask } from "../../services/tasks"
import { Task } from "../../types"

const useStore = () => {

    const { tasks, loadTasks } = useContext(StoreContext)

    useEffect(() => {
        !tasks.length && servicesTask.getAll().then(data => loadTasks(data))
    }, [tasks, loadTasks])

    return { tasks }

}

export { useStore }