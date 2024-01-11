import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const FollowingCard = () => {
  // Dummy data for three user profiles
  const userProfiles = [
    {
      id: 1,
      name: "Jesus Foakes",
      profilePicture:
        "https://news.artnet.com/app/news-upload/2015/12/jesus1.jpg", // Replace with actual URL
    },
    {
      id: 2,
      name: "Abraham Vance",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH9nGJDZB9sxy6eEv3M9UA7qEa5LId2VYYA&usqp=CAU", // Replace with actual URL
    },
    {
      id: 3,
      name: "Kristie Murphy",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5Qk5UmXzImouOJbhMDPTM-NPqlHTc1CtyQ&usqp=CAU", // Replace with actual URL
    },
    // Add more profiles as needed
  ];

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title as="h4">People You Follow</Card.Title>
        <Button variant="primary">View More</Button>
      </Card.Header>
      <Card.Body>
        <Row>
          {userProfiles.slice(0, 3).map((profile) => (
            <Col key={profile.id} xs={4} className="text-center mb-3">
              <img
                src={profile.profilePicture}
                alt={profile.name}
                className="profile-image"
                style={{
                  width: "70px", // Adjust the width as needed
                  height: "70px", // Adjust the height as needed
                  objectFit: "cover", // Maintain aspect ratio and cover the container
                  borderRadius: "50%", // Make it circular
                }}
              />
              <p className="mt-2">{profile.name}</p>
            </Col>
          ))}
        </Row>
      </Card.Body>
      <Card.Footer>
        <p className="mb-0">Fransico Lawrence , Liam Bancroft and 15 more </p>
      </Card.Footer>
    </Card>
  );
};

export default FollowingCard;
