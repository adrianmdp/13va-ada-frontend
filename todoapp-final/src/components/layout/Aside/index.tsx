import { FC } from "react"
import { useStore } from "../../../hooks"
import { Task } from "../../../types"
import "./styles.scss"


const Aside = () => {

  const { tasks } = useStore()

    return (

        <aside className="main-aside">
          Tareas: {tasks.length}
        </aside>

    )

}

export { Aside }