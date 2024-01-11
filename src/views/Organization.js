import React from "react";
// react plugin for creating notifications over the dashboard
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Organization() {
  return (
    <>
      <Container className="my-3">
        <h2>Organization Report</h2>

        <Row className="mt-3">
          <Col md={8}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Financial Overview</Card.Title>
                <p className="card-category">Year-to-Date Performance</p>
              </Card.Header>
              <Card.Body>
                {/* Add financial charts or data here */}
                <p>Financial charts or data can be displayed here.</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Key Metrics</Card.Title>
                <p className="card-category">Performance Indicators</p>
              </Card.Header>
              <Card.Body>
                {/* Add key metrics or KPIs here */}
                <ul>
                  <li>Revenue: $XXXX</li>
                  <li>Profit Margin: XX%</li>
                  {/* Add more metrics as needed */}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Employee Engagement</Card.Title>
                <p className="card-category">Survey Results</p>
              </Card.Header>
              <Card.Body>
                {/* Add employee engagement survey results or charts here */}
                <p>Employee survey results or charts can be displayed here.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Button variant="primary">Download Full Report</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Organization;
