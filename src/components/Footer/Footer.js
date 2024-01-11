import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid className="footer-container">
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <span
                role="img"
                aria-label="heart"
                style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
              >
                Ⓜ️
              </span>
              <p className="copyright text-center">
                © {new Date().getFullYear()} <a href="#">Makerble</a>, spreading
                love and inclusivity
              </p>
            </div>
          </nav>
          <Row className="justify-content-center mt-3">
            {/* Social Media Icons */}
            <Col xs="auto" className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </Col>
            <Col xs="auto" className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </Col>
            <Col xs="auto" className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </Col>
            <Col xs="auto" className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
