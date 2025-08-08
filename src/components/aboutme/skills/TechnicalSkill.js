import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

const skills = [
  { name: "HTML", percent: 70, color: "#fe3e57" },
  { name: "CSS", percent: 80, color: "#ff8c2f" },
  { name: "JavaScript", percent: 70, color: "#f1f965" },
  { name: "React.js", percent: 78, color: "#41f2ff" },
  { name: "Bootstrap", percent: 85, color: "#6f42c1" },
  { name: "Tailwind CSS", percent: 82, color: "#38bdf8" },
  { name: "Python (Basic)", percent: 40, color: "#39c4ff" },
  { name: "MongoDB", percent: 70, color: "#10a37f" },
  { name: "MySQL", percent: 50, color: "#ff0173" },
];

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>

      <Tada>
        <h1 className="mt-4 text-center">Technical Skills</h1>
      </Tada>

      <Container className="mt-5">
        <Row className="g-5">
          {skills.map((skill, index) => (
            <Col md={4} key={index}>
              <h1
                style={{
                  fontSize: "60px",
                  color: skill.color,
                  fontWeight: 700,
                }}
              >
                {skill.percent}%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role="progressbar"
                    style={{
                      width: `${skill.percent}%`,
                      backgroundColor: skill.color,
                      height: "10px",
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: skill.color,
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  {skill.name}
                </h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
