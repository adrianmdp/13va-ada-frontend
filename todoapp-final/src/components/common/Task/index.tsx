import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { servicesTask } from "../../../services/tasks";
import { Task as TaskType, Category } from "../../../types";

type Props = {
  id: string;
  title: string;
  date: Date;
  category: Category;
  description: string;
  status: string;
  onDelete: (id: string) => void;
};

const Task: FC<Props> = ({
  id,
  title,
  date,
  category,
  description,
  status,
  onDelete,
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {date.toString()}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text style={{ color: category.color }}>{category.name}</Card.Text>
        <Card.Text>{status}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" onClick={() => onDelete(id)}>
          Eliminar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export { Task };
