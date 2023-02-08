import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { servicesUser } from "../../../services/users";
import { SignUpForm } from "../../../types";

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpForm>();

  const onSubmit = (data: SignUpForm) => {
    servicesUser.add({
      ...data,
      birthdate: new Date(data.birthdate),
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar nombre"
          {...register("name")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Aperllido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar apellido"
          {...register("lastname")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

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
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresar Password"
          autoComplete="off"
          {...register("password")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBirthdate">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control
          type="date"
          placeholder="Ingresar fecha de nacimiento"
          {...register("birthdate")}
        />
        <Form.Text className="text-danger">Estan mal los datos∫</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear cuenta
      </Button>
    </Form>
  );
};

export { SignUp };
