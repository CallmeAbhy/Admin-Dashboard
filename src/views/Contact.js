import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Contact() {
  const contacts = [
    {
      id: 1,
      name: "Anupam Das",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHzvG_xok-5bg/profile-displayphoto-shrink_100_100/0/1680507476527?e=1710374400&v=beta&t=2TEWl8HsKL-KN1hIUxve8Mw40pWjEU5goqC1UprqF1c",
    },
    {
      id: 2,
      name: "Triveni Gaidhane",
      image:
        "https://media.licdn.com/dms/image/D5635AQEBLM5PgXkFxA/profile-framedphoto-shrink_100_100/0/1626717994022?e=1705600800&v=beta&t=hgTCx4S_WW_z3oy9-RMTgCAta_sxX8pOtgijV-ohNbc",
    },
    {
      id: 3,
      name: "Jay Vasave",
      image:
        "https://media.licdn.com/dms/image/D4D03AQH_r9aP4KOs5Q/profile-displayphoto-shrink_100_100/0/1675706903583?e=1710374400&v=beta&t=eAQ6NlR21Dy2QKUCg5ozwyNM8uxYpxA28PkXS6-wBgE",
    },
    {
      id: 4,
      name: "Narendra Kobins",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHgPzHSv3sD2g/profile-displayphoto-shrink_100_100/0/1701957654017?e=1710374400&v=beta&t=3jaba6vnx_1gyDLv-h3awu4EdPoAlaCPbUwarethGnA",
    },
    {
      id: 5,
      name: "Tanvi Jaglan",
      image:
        "https://media.licdn.com/dms/image/D4D03AQEyPlvi-ZKDFw/profile-displayphoto-shrink_100_100/0/1685081812131?e=1710374400&v=beta&t=upnakobmO0Ym5EFDCGZwvNWkPqnjPXydLBWMs0_-KZE",
    },
    {
      id: 6,
      name: "Akshay Navale",
      image:
        "https://media.licdn.com/dms/image/D5603AQGZ1QJ6amca5A/profile-displayphoto-shrink_100_100/0/1704464325180?e=1710374400&v=beta&t=Myg6Es_jlhpK0bS5LOlYRhhvB3XeIZ8EsJeziK1-kDs",
    },
    {
      id: 7,
      name: "Sandhya Mishra",
      image:
        "https://media.licdn.com/dms/image/D4E03AQFnUQ7LKBLTgA/profile-displayphoto-shrink_100_100/0/1694701302542?e=1710374400&v=beta&t=2QvjKMPMKXgD6O33mEGvFQRNyN5WIxH9yoS27Eq79Zs",
    },
    {
      id: 8,
      name: "Dipika Shelke",
      image:
        "https://media.licdn.com/dms/image/D4D03AQEKFhR7GeZ_Yg/profile-displayphoto-shrink_100_100/0/1674213876553?e=1710374400&v=beta&t=lkDuEINoh8cO2FRlmGJfIA0NvruOGi1ug8vtPPwv3Y8",
    },
    {
      id: 9,
      name: "Akshat Shrivastav",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFA1hATKqyNDQ/profile-displayphoto-shrink_100_100/0/1676979866265?e=1710374400&v=beta&t=pNhFW8UtHw4DhEtH9vj-1VDI5XzSrSm_U2AWGGMbUH4",
    },
    {
      id: 10,
      name: "Anushree Jain",
      image:
        "https://media.licdn.com/dms/image/D4D03AQGDvnRw-PnXJw/profile-displayphoto-shrink_100_100/0/1670937345139?e=1710374400&v=beta&t=dV9TrLrMICqJWtrVFT9fVD_LumSMoEEyhaUSd9vYKuM",
    },
    {
      id: 11,
      name: "Yashraj Sawant",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHR-h--Tfd9Nw/profile-displayphoto-shrink_100_100/0/1672890516699?e=1710374400&v=beta&t=21yoEzG9kt5-HwXggnPRJLDvg_Q9a2uasG7-C9z6zV0",
    },

    // Add more contacts as needed
  ];

  return (
    <>
      <Container className="my-3">
        <h2>Contact Page</h2>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={contact.image}
                  alt={`Contact ${contact.id}`}
                />
                <Card.Body>
                  <Card.Title>{contact.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Contact;
