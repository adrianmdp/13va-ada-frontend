import { createContext, FC, ReactNode, useState } from "react";
import { servicesTask } from "../../services/tasks";
import { servicesUser } from "../../services/users";
import { Task, User } from "../../types";

type ContextType = {
  tasks: Task[];
  users: User[];
  loadTasks: () => void;
  loadUsers: () => void;
};
type ProviderType = { children: ReactNode };

const StoreContext = createContext<ContextType>({
  tasks: [],
  users: [],
  loadTasks: () => undefined,
  loadUsers: () => undefined,
});

const StoreProvider: FC<ProviderType> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const loadTasks = () => servicesTask.getAll().then((data) => setTasks(data));
  const loadUsers = () => servicesUser.getAll().then((data) => setUsers(data));

  return (
    <StoreContext.Provider value={{ tasks, users, loadTasks, loadUsers }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
