import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Suggestion = () => {
  // Dummy data for three user profiles
  const userProfiles = [
    {
      id: 1,
      name: "P Thakur",
      profilePicture:
        "https://media.licdn.com/dms/image/D5603AQEMQO8rB2fapw/profile-displayphoto-shrink_100_100/0/1677180305543?e=1710374400&v=beta&t=tqi9rr3iDnP5mToYj1LEWwiJDFLd7fHxs-yz27CDpY8", // Replace with actual URL
    },
    {
      id: 2,
      name: "Aditya Sathe",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQFwkVpnlNNqEQ/profile-displayphoto-shrink_100_100/0/1699692936132?e=1710374400&v=beta&t=gX-Z_EaCb3ks4IvVqQHTatVvdFW-kLxNbTArCiU7t6c", // Replace with actual URL
    },
    {
      id: 3,
      name: "Amit Tripathi",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQG2YrMkbSTCVQ/profile-displayphoto-shrink_100_100/0/1700059240570?e=1710374400&v=beta&t=b5I3MJN6EXLBXJwCIo53u1x2RPTw4QDjCAZzI2jezto", // Replace with actual URL
    },
    // Add more profiles as needed
  ];

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title as="h4">People You May Know</Card.Title>
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
    </Card>
  );
};

export default Suggestion;
