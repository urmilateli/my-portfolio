import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";

export default function MyNav() {
  return (
    <Navbar fixed="top" expand="md" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <strong style={{ color: "white" }}>Urmila</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="nav-link">
              Resume
            </Nav.Link>
            
            <Nav.Link as={Link} to="/blogs" className="nav-link">
              <ImBlog style={{ marginBottom: "2px" }} /> Blogs
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
