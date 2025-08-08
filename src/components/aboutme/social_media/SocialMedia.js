import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5 justify-content-center">
          <Col md={3}>
            <a
              href="https://github.com/urmilateli"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub size={40} />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/urmila-teli-073061305/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin size={40} />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
