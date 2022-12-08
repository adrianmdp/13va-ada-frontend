import { Category } from "../../types";

const getAll = () => {};

const get = async (id: string) => {
  const response = await fetch(
    `https://todoapp-13ava-default-rtdb.firebaseio.com/categories/${id}.json`
  );

  const data = await response.json();

  return data;
};

type Payload = Omit<Category, "id">;

const add = (category: Payload) => {
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(category),
  };

  fetch(
    "https://todoapp-13ava-default-rtdb.firebaseio.com/categories.json",
    options
  );
};

export const categoriesService = { getAll, get, add };
