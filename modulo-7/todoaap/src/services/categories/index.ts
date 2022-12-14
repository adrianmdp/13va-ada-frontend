import { DB_BASE_URL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { Categories } from "../../pages";
import { Category } from "../../types";

const getAll = async (): Promise<Category[]> => {
  const response = await fetch(`${DB_BASE_URL}/categories.json`);
  const data = await response.json();

  return mapToArray<Category>(data);
};

const get = (id: string) => {};

type Payload = Omit<Category, "id">;

const add = async (category: Payload) => {
  const options = {
    method: "POST",
    body: JSON.stringify(category),
  };

  const response = await fetch(`${DB_BASE_URL}/categories.json`, options);
  const data = await response.json();

  if (data.name) {
    return true;
  } else {
    return false;
  }
};

const update = (category: Partial<Category>) => {};

const remove = async (id: string) => {
  const options = {
    method: "DELETE",
  };

  await fetch(`${DB_BASE_URL}/categories/${id}.json`, options);
};

export const categoriesService = { getAll, get, add, update, remove };
