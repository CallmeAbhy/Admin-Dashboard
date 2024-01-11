import React from "react";

import {
  Card,
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";
function Project() {
  return (
    <>
      <Container className="my-3">
        <h2>Ongoing Project Dashboard</h2>
        <Row>
          <Col md={8}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Project Overview</Card.Title>
                <p className="card-category">Progress</p>
              </Card.Header>
              <Card.Body>
                <ProgressBar animated now={70} label="70%" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">Ongoing Tasks</p>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Task 1</li>
                  <li>Task 2</li>
                  {/* Add more tasks as needed */}
                </ul>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Header>
                <Card.Title as="h4">Team Members</Card.Title>
                <p className="card-category">Project Team</p>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Team Member 1</li>
                  <li>Team Member 2</li>
                  {/* Add more team members as needed */}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Project Details</Card.Title>
                <p className="card-category">Additional Information</p>
              </Card.Header>
              <Card.Body>
                <p>Details about the ongoing project...</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button variant="primary">View Full Dashboard</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Project;
