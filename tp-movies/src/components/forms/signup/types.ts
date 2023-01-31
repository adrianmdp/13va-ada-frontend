import { User } from "../../../types";

export type SignUpForm = Omit<User, "id">;
