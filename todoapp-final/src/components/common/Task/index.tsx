import { FC } from "react"
import { Card } from "react-bootstrap"
import { Task as TaskType } from "../../../types"


const Task: FC<TaskType> = ({ id, title, date, category, description, status }) => {

    return(
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date.toString()}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text style={ { color: category.color}}>
                    {category.name}
                </Card.Text>
                <Card.Text>
                    {status}
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export { Task }