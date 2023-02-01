import { mapToArray } from "../helpers/mapTpArray";
import { AddTaskPayload, Task } from "../types";
import { api } from "../utils/axios";

const add = async (task: AddTaskPayload) => {
  const response = await api.post("/tasks.json", task);
  return response.data;
};

const getAll = async () => {
  const response = await api.get("tasks.json");
  return mapToArray<Task>(response.data);
};

const remove = async (id: string) => {
  const response = await api.delete(`tasks/${id}.json`);
  return response.data;
};
export const servicesTask = { add, getAll, remove };
