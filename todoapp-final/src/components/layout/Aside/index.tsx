import { useTasks } from "../../../hooks";
import "./styles.scss";

const Aside = () => {
  const { tasks } = useTasks();

  return (
    <aside className="main-aside">
      <ul>
        <li>Tareas: {tasks.length}</li>
        <li>
          Compras: {tasks.filter((t) => t.category.name === "Compras").length}
        </li>
        <li>
          Mandados: {tasks.filter((t) => t.category.name === "Mandados").length}
        </li>
      </ul>
    </aside>
  );
};

export { Aside };
