import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill all the fields!");
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxVyyR4gTxPmbiALySK1jtsg8Y37nj6UcRuIECwqFqjjhsvA83IIPxtG3BwqyBh-mDx/exec";

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert(`Thanks ${formData.name}, I will shortly connect with you!`);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Submission failed! Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("Form not submitted. Check console for error.");
    }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">Full Name</label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">Email address</label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">Message</label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a href="mailto:urmilateli6378@gmail.com" className="personal-details">
                      <div className="detailsIcon"><FiAtSign /></div>
                      <p style={{ color: "#fbd9ad" }}>urmilateli6378@gmail.com</p>
                    </a>
                    <a href="tel:+916378294640" className="personal-details">
                      <div className="detailsIcon"><FiPhone /></div>
                      <p style={{ color: "#fbd9ad" }}>+91 6378294640</p>
                    </a>
                    <a href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68" className="personal-details">
                      <div className="personal-details">
                        <div className="detailsIcon"><HiOutlineLocationMarker /></div>
                        <p style={{ color: "#fbd9ad" }}>Udaipur Rajasthan</p>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
