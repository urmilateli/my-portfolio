import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import { Fade } from "react-reveal";
import atm from "../../images/atm-ico.jpeg";
import music from "../../images/music-ico.jpg";
import book from "../../images/book-ico.avif";
import food from "../../images/food-ico.avif";
import rock from "../../images/rock-icon.jpg";
import todo from "../../images/todo-ico.jpg";
import github from "../../images/github.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "ATM Interface",
      image: atm,
      link: "https://github.com/urmilateli/ATM_INTERFACE",
      desc: "Simulates basic ATM functionality using Java.",
      tech: "Java"
    },
    {
      title: "Music Player",
      image: music,
      link: "https://github.com/urmilateli/Music-Player",
      desc: "Fully functional music player with play/pause/skip support.",
      tech: "HTML, CSS, JS"
    },
    {
      title: "Book Catalog",
      image: book,
      link: "https://github.com/urmilateli/Book-Catlog",
      desc: "Searchable book catalog system with clean UI.",
      tech: "HTML, CSS, JS"
    },
    {
      title: "Food Website",
      image: food,
      link: "https://github.com/urmilateli/food_web",
      desc: "Modern food order website with responsive UI.",
      tech: "HTML, CSS, JS"
    },
    {
      title: "Rock Paper Scissors",
      image: rock,
      link: "https://github.com/urmilateli/rock-paper",
      desc: "Fun game of rock-paper-scissors with score logic.",
      tech: "HTML, CSS, JS"
    },
    {
      title: "To-Do App",
      image: todo,
      link: "https://github.com/urmilateli/ToDo-List",
      desc: "Minimal To-Do list app for task management.",
      tech: "HTML, CSS, JS"
    },
    
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">All Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Fade bottom>
              <div
                className="singleProject"
                style={{
                  backgroundColor: "rgb(142 70 186 / 31%)",
                  border: "1px solid"
                }}
              >
                <div className="projectContent">
                  <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                  <div className="project--showcaseBtn">
                    <a
                      href={project.link}
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
                      fontWeight: 600
                    }}
                  >
                    {project.desc}
                  </p>
                </h6>
                <div
                  className="project--lang"
                  style={{
                    background: "#fbd9ad",
                    color: "#b061df",
                    fontWeight: 600
                  }}
                >
                  {project.tech}
                </div>
              </div>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
