import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMe } from "../../../hooks";
import { LoginForm } from "../../../types";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { login } = useMe();

  const onSubmit = (data: LoginForm) => {
    login(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresar email"
          {...register("email")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresar contraseña"
          autoComplete="off"
          {...register("pass")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Inicar sesión
      </Button>
    </Form>
  );
};

export { Login };
