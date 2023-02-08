import { AddTaskForm, Layout } from "../../components";
import { withAuth } from "../../hoc";

const AddTaskPage = () => {
  return (
    <Layout>
      <AddTaskForm />
    </Layout>
  );
};

export const AddTask = withAuth(AddTaskPage);
