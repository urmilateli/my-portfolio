import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Urmila Teli</b>.
                <br />
                <br />
                I am currently pursuing a <b className="purple">Bachelor of Computer Applications (BCA)</b> at <b className="purple">IGNOU Jaipur</b>.
                <br />
                <br />
                Alongside, I am also doing a <b className="purple">Web Development Course</b> from <b className="purple">Navgurukul</b> since <b className="purple">June 2023</b>, and continuing to build my skills.
                <br />
                <br />
                I am passionate about <b className="purple">technology, coding, and creativity</b>. I love exploring new ideas and solving real-world problems through code.
                <br />
                <br />
                🛠️ Languages & Tools I know:
                <br />
                <b className="purple">HTML, CSS, JavaScript, Python</b>
                <br />
                <br />
                🎨 Frameworks & Libraries:
                <br />
                <b className="purple">React (Basic), Bootstrap, Tailwind CSS</b>
                <br />
                <br />
                🗄️ Databases:
                <br />
                <b className="purple">MongoDB, MySQL</b>
                <br />
                <br />
                In my free time, I enjoy <b className="purple">traveling, dancing, cooking</b> and experimenting with new web technologies. I'm dedicated to becoming a successful web developer.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
