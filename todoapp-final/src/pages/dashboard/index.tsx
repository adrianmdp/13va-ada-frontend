import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout, Task } from "../../components";
import { withAuth } from "../../hoc";
import { useTasks } from "../../hooks";

const DashboardPage = () => {
  const { tasks, removeTask, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <Layout>
      <Container fluid className="p-4">
        <Row>
          {tasks.map((task) => (
            <Col key={task.id} sm={6} md={4} lg={3} className="mb-4">
              <Task {...task} onDelete={removeTask} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const Dashboard = withAuth(DashboardPage);
