import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
function Task() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "Ongoing" },
    { id: 2, title: "Task 2", status: "Ongoing" },
    { id: 3, title: "Task 3", status: "Completed" },
    { id: 4, title: "Task 4", status: "Started" },
    { id: 5, title: "Task 5", status: "Ongoing" },
    { id: 6, title: "Task 6", status: "Completed" },
    { id: 7, title: "Task 7", status: "Started" },
    { id: 8, title: "Task 8", status: "Ongoing" },
    { id: 9, title: "Task 9", status: "Ongoing" },
    { id: 10, title: "Task 10", status: "Completed" },
    { id: 11, title: "Task 11", status: "Started" },
    { id: 12, title: "Task 12", status: "Ongoing" },
    // Add more tasks as needed
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "Ongoing":
        return "yellow";
      case "Started":
        return "red";
      default:
        return "black";
    }
  };

  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Completed" ? "Ongoing" : "Completed",
            }
          : task
      )
    );
  };

  return (
    <>
      <Container className="my-3">
        <h2>Task Report</h2>
        <Form.Group className="mb-3">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Row>
          {tasks
            .filter((task) =>
              task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((task) => (
              <Col key={task.id} md={4} className="mb-4">
                <Card style={{ borderColor: getStatusColor(task.status) }}>
                  <Card.Body>
                    <Form.Check
                      type="checkbox"
                      id={`taskCheckbox-${task.id}`}
                      checked={task.status === "Completed"}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                    <Card.Title>
                      {task.status === "Completed" && (
                        <BsCheckCircle className="mr-2" />
                      )}
                      {task.title}
                    </Card.Title>
                    <Card.Text>Status: {task.status}</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Task;
