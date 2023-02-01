import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTasks } from "../../../hooks";
import { servicesCategory } from "../../../services/categories";
import { servicesTask } from "../../../services/tasks";
import { AddTaskForm, Category } from "../../../types";

const AddTask = () => {
  const { addTask } = useTasks();

  const [categories, setCategories] = useState<Category[]>([]);

  const { register, handleSubmit } = useForm<AddTaskForm>();

  useEffect(() => {
    servicesCategory.getAll().then((data) => setCategories(data));
  }, []);

  const onSubmit = (data: AddTaskForm) => {
    addTask({
      ...data,
      date: new Date(data.date),
      category: categories.find((cat) => cat.id === data.category) as Category,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar título"
          {...register("title")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          placeholder="Ingresar Fecha"
          {...register("date")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Estado</Form.Label>
        <Form.Select
          defaultValue={0}
          aria-label="Default select example"
          {...register("category")}
        >
          <option disabled>Seleccionar estado...</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </Form.Select>
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          placeholder="Ingresar descripción"
          {...register("description")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Estado</Form.Label>
        <Form.Select
          defaultValue={0}
          aria-label="Default select example"
          {...register("status")}
        >
          <option disabled>Seleccionar estado...</option>
          <option key="one" value="1">
            One
          </option>
          <option key="two" value="2">
            Two
          </option>
          <option key="three" value="3">
            Three
          </option>
        </Form.Select>
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear cuenta
      </Button>
    </Form>
  );
};

export { AddTask };
