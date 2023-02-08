import { useContext } from "react";
import { StoreContext } from "../../contexts";
import { servicesTask } from "../../services/tasks";
import { AddTaskPayload } from "../../types";

const useTasks = () => {
  const { tasks, loadTasks } = useContext(StoreContext);

  const removeTask = async (id: string) => {
    await servicesTask.remove(id);
    loadTasks();
  };

  const addTask = async (data: AddTaskPayload) => {
    await servicesTask.add(data);
    loadTasks();
  };

  return { tasks, loadTasks, removeTask, addTask };
};

export { useTasks };
