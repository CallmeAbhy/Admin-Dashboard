import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsGearFill } from "react-icons/bs";

const EventSection = () => {
  const events = [
    {
      id: 1,
      name: "Event 1",
      tag: "First Event",
      timeline: "12 Jan - 12 Feb",
      manager: "Abhy Sawant",
    },
    {
      id: 2,
      name: "Event 2",
      tag: "Second Event",
      timeline: "15 Mar - 20 Apr",
      manager: "Eva Patel",
    },
    {
      id: 3,
      name: "Event 3",
      tag: "Special Event",
      timeline: "5 May - 10 Jun",
      manager: "John Doe",
    },
    // Add more events as needed
  ];

  return (
    <Container className="my-3">
      <h2>Events</h2>
      {events.map((event) => (
        <Card key={event.id} className="mb-4">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title as="h4">{event.name}</Card.Title>
            <BsGearFill />
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {event.tag}
            </Card.Subtitle>
            <Card.Text>
              <strong>Timeline:</strong> {event.timeline}
              <br />
              <strong>Manager:</strong> {event.manager}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default EventSection;
