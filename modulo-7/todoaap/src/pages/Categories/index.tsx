import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, FormCategories } from "../../components";
import { Spinner } from "../../components";
import { categoriesService } from "../../services";
import { Category } from "../../types";
import { FilterFileds } from "./types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {

    const criteria = { 
      text: searchParams.get('text'),
      color: searchParams.get('color')
    }

    categoriesService.getAll(criteria).then(data => setCategories(data));
  }, [searchParams])

  const borrarCategoria = async (id: string) => {
    await categoriesService.remove(id);
  };

  const setSearchQuery = (params: FilterFileds) => {

    setSearchParams(params)

  }

  if(!categories.length) return <Spinner />

  return (
    <div>
      <h1>Categorías</h1>

      <FormCategories onSearch={setSearchQuery} />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{width: 40, height: 40, borderRadius: 20, backgroundColor: elem.color, marginRight: 10}}></span>
                  <span>{elem.color}</span>
                </td>
                <td>
                  <Button
                    variant="danger"
                    icon="trash"
                    handleClick={() => borrarCategoria(elem.id)}
                  />
                  <Button
                    variant="primary"
                    icon="pencil"
                    handleClick={() => navigate(`/categories/save/${elem.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Categories };
