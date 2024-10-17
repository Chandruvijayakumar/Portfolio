import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/1703422318484.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../Home/Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Enthusiastic Full Stack Developer learning and working with the
              MERN Stack (MongoDB, Express.js, React.js, Node.js).
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript (ES6+), Go, React.js, and Next.js while exploring
                  Node.js.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  Passionate about building web technologies
                </b>{" "}
                and products, with a growing interest{" "}
                <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Gaining experience in{" "}
              <b className="purple">
                backend development, frontend integration, and database
                management.
              </b>{" "}
              and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          {/* <Col
            md={4}
            className="myAvtar"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px auto",
            }}
          >
            <Tilt>
              <img
                src={myImg}
                alt="avatar"
                style={{
                  borderRadius: "50%", // Makes the image circular
                  width: "400px",
                  height: "400px",
                  objectFit: "cover", // Ensures the image fits within the circle
                  transition: "transform 0.5s ease-in-out",
                  border: "5px solid #f2g6f1",
                }}
              />
            </Tilt>
          </Col> */}
          <Col
            md={4}
            className="myAvtar"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px auto",
            }}
          >
            <Tilt>
              <img
                src={myImg}
                alt="avatar"
                className="img-fluid" // Use the class to apply animation
              />
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
                  href="https://github.com/Chandruvijayakumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/chandru-vijayakumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mr_h_a_w_k_/"
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
