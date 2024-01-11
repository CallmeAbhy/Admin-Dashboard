import React from "react";
import { Card, Form, ProgressBar, Button } from "react-bootstrap";

const PersonalProgressCard = () => {
  const subjects = [
    { name: "Subject 1", rank: 7 },
    { name: "Subject 2", rank: 3 },
    { name: "Subject 3", rank: 9 },
    { name: "Subject 4", rank: 5 },
    { name: "Subject 5", rank: 2 },
    { name: "Subject 6", rank: 8 },
    { name: "Subject 7", rank: 4 },
    { name: "Subject 8", rank: 6 },
    { name: "Subject 9", rank: 10 },
    { name: "Subject 10", rank: 1 },
  ];

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title as="h4">Personal Progress</Card.Title>
        <Button variant="link">Go to Board</Button>
      </Card.Header>
      <Card.Body>
        {subjects.map((subject, index) => (
          <Form key={index}>
            <Form.Group className="mb-3">
              <Form.Label>{subject.name}</Form.Label>
              <ProgressBar
                variant={subject.rank <= 5 ? "danger" : "success"}
                now={subject.rank * 10}
                label={subject.rank}
              />
            </Form.Group>
          </Form>
        ))}
      </Card.Body>
    </Card>
  );
};

export default PersonalProgressCard;
