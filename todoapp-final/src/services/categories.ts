import { mapToArray } from "../helpers/mapTpArray";
import { AddCategoryPayload, Category } from "../types";
import { api } from "../utils/axios"

const add = async (category: AddCategoryPayload) => {

    const response = await api.post('/categories.json', category);

    return response.data

}

const getAll = async () => {

    const response = await api.get('/categories.json');

    return mapToArray<Category>(response.data)

}

export const servicesCategory = { add, getAll }