import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/Projects/Harsh Image.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Row>
          <Col md={12} className="home-about-resume">
            <h1>VIEW OR DOWNLOAD MY RESUME</h1>
            <p>
              You can view or download my resume by clicking the button below.
            </p>
            <Button variant="primary" href="https://drive.google.com/file/d/1xDmWLcZTEDGnfqV59f_fke2O6taNCQtf/view?usp=drive_link" target="_blank">
              View / Download Resume
            </Button>
          </Col>
        </Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I am a <b className="purple">Data Engineer at ZS Associates, Gurgaon</b>, with a strong passion for building scalable and reliable software systems.
    <br />
    <br />
    I have completed my <b className="purple">B.Tech in Electronics and Communication Engineering</b> from <b className="purple">NIT Jamshedpur</b>.
    <br />
    <br />
    I have hands-on experience working with <b className="purple">Varicent ELT and SP tools</b>, contributing to data pipelines and analytics workflows.
    <br />
   
    <br />
    I am a <b className="purple">tech geek</b> and I continuously learn and explore new
    <i>
      <b className="purple"> technologies and software tools</b>
    </i>.
    <br />
    <br />
    Currently, I am preparing for a <b className="purple">Software Development Engineer (SDE)</b> role and learning
    <i>
      <b className="purple"> system design concepts</b>
    </i> to build fast and scalable applications.
    <br />
    <br />
    My hobbies include watching <b className="purple">movies and web series</b> and <b className="purple">reading books</b>.
    <br />
  </p>
</Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/onlyharsh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/onlyharsh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/harshr784"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/only_hars/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}

export default Home2;
