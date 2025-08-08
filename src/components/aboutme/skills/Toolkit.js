import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="Git" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt="GitHub"
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pm} alt="Postman" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={chrome} alt="Chrome" style={{ width: "95%", height: "95%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
