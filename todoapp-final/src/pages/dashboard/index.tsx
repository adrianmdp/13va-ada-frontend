import { Col, Container, Row } from "react-bootstrap"
import { Layout, Task } from "../../components"
import { useStore } from "../../hooks"


const Dashboard = () => {

   const { tasks } = useStore()
    
    return (
        <Layout>
            <Container fluid className="p-4">
                <Row>
                    {
                        tasks.map(task => (
                            <Col key={task.id} sm={6} md={4} lg={3} className="mb-4">
                                <Task { ...task } />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Layout>
    )

}

export { Dashboard }