import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import "./users.css";

const UsersPage = () => {
  return <Layout>Pagina users</Layout>;
};

export const Users = withAuth(UsersPage);
