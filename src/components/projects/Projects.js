import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import music from "../../images/music-ico.jpg";
import book from "../../images/book-ico.avif";
import food from "../../images/food-ico.avif";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
// ❌ Maine woh galat import line yahan se HATA di hai ❌

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>

            {/* 🎵 Music Player Project */}
            <Col md={4}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Music Player</h5>
                    <img src={music} alt="music-player" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/urmilateli/Music-Player"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                      >
                        <FaCode className="icon" aria-label="Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A fully functional Music Player app that lets you play, pause, skip, and enjoy songs smoothly in a stylish UI.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>

            {/* 📚 Book Catalog Project */}
            <Col md={4}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Book Catalog</h5>
                    <img src={book} alt="book-catalog" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/urmilateli/Book-Catlog"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                      >
                        <FaCode className="icon" aria-label="Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A book catalog system where you can search and view books by title, author, and category in a clean layout.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>

            {/* 🍔 Food Web Project */}
            <Col md={4}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>Food Website</h5>
                    <img src={food} alt="food-website" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/urmilateli/food_web"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                      >
                        <FaCode className="icon" aria-label="Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A modern food ordering website where users can explore menus, see featured dishes, and place orders online.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>

         {/* 🔗 View All Button */}
         <div className="blog--viewAll mt-4 text-center">
           <Link to="/projects">
                <button className="btn btn-primary">
             View All <HiArrowRight className="viewArr" />
                </button>
             </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}