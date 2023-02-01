import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts";
import { servicesTask } from "../../services/tasks";
import { AddTaskPayload } from "../../types";

const useTasks = () => {
  const { tasks, loadTasks } = useContext(StoreContext);

  useEffect(() => {
    !tasks.length && getTasks();
  }, [tasks]);

  const getTasks = async () => {
    const response = await servicesTask.getAll();
    loadTasks(response);
  };

  const removeTask = async (id: string) => {
    await servicesTask.remove(id);
    getTasks();
  };

  const addTask = async (data: AddTaskPayload) => {
    await servicesTask.add(data);
    getTasks();
  };

  return { tasks, removeTask, addTask };
};

export { useTasks };
