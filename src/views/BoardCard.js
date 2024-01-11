import React from "react";
import { Card, Button } from "react-bootstrap";

const BoardCard = () => {
  const boards = [
    {
      name: "Board 1",
      imageSrc:
        "https://pbs.twimg.com/profile_images/3565535018/a542dc72b3eb10b7bc1e5ba6b038cd2b_400x400.png",
    },
    {
      name: "Board 2",
      imageSrc:
        "https://pbs.twimg.com/profile_images/3565535018/a542dc72b3eb10b7bc1e5ba6b038cd2b_400x400.png",
    },
    {
      name: "Board 3",
      imageSrc:
        "https://pbs.twimg.com/profile_images/3565535018/a542dc72b3eb10b7bc1e5ba6b038cd2b_400x400.png",
    },
  ];
  return (
    <>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Title as="h4">Board</Card.Title>
          <Button variant="primary">Add Board</Button>
        </Card.Header>
        <Card.Body>
          <ul className="list-group">
            {boards.map((board, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center"
              >
                <img
                  src={board.imageSrc}
                  alt={board.name}
                  className="board-image"
                  style={{
                    maxWidth: "50px", // Adjust the max-width as needed
                    maxHeight: "50px", // Adjust the max-height as needed
                    objectFit: "cover", // Maintain aspect ratio and cover the container
                    marginRight: "10px", // Add margin for separation from the text
                  }}
                />
                <span>{board.name}</span>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default BoardCard;
