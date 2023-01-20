import { User } from "../../types";
import { DB_BASE_URL } from '../../constants'
import { mapToArray } from "../../helpers/mapToArray";

const getAll = async () => {
    const response = await fetch(`${DB_BASE_URL}/users.json`);
    const data = await response.json()

    return mapToArray<User>(data);
};

const get = () => {
    
};

type Payload = Omit<User, "id">;

const add = (user: Payload) => {};

export const usersService = { getAll, get, add };
