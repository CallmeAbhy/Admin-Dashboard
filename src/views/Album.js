import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Album() {
  const albums = [
    {
      id: 1,
      title: "Project Album 1",
      description: "This is the first project album.",
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKS4POfhsA5alEftx5ea2d_ZalqXt6hLH-OCOdLDSz-BN6YQ4GYIXpbzD0fhkWqmuZjAk&usqp=CAU",
      projects: [
        { id: 1, name: "Project 1", progress: 70 },
        { id: 2, name: "Project 2", progress: 40 },
      ],
    },
    {
      id: 2,
      title: "Project Album 2",
      description: "This is the second project album.",
      coverImage:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
      projects: [
        { id: 3, name: "Project 3", progress: 90 },
        { id: 4, name: "Project 4", progress: 20 },
      ],
    },
    // Add more albums as needed
  ];

  return (
    <Container className="my-3">
      <h2>Project Albums</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {albums.map((album) => (
          <Col key={album.id}>
            <Card>
              <Card.Img variant="top" src={album.coverImage} />
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>{album.description}</Card.Text>
                <Button variant="primary">View Dashboard</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {album.projects.length} Projects
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Album;
