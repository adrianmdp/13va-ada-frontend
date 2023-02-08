import { AddCategoryForm, Layout } from "../../components";
import { withAuth } from "../../hoc";

const CategoriesPage = () => {
  return (
    <Layout>
      <AddCategoryForm />
      Categorías
    </Layout>
  );
};

export const Categories = withAuth(CategoriesPage);
