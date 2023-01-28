import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { servicesCategory } from "../../../services/categories"
import { AddCategoryForm } from "../../../types"

const AddCategory = () => {

    const { register, handleSubmit } = useForm<AddCategoryForm>()

    const onSubmit = (data: AddCategoryForm) => {

        servicesCategory.add(data)

    }

    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre" { ...register('name') } />
                <Form.Text className="text-danger">
                    Estan mal los datos
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicColor">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="color" placeholder="Ingresar nombre" { ...register('color') } />
                <Form.Text className="text-danger">
                    Estan mal los datos
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Crear categoría
            </Button>
        </Form>

    )

}

export { AddCategory }