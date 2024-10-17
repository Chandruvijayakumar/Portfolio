import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Chandru Vijayakumar</span>
            from{" "}
            <span className="purple"> Krishnagiri, Tamil Nadu, India.</span>
            <br />
            I am an enthusiastic Full Stack Developer skilled in the MERN Stack,
            currently working on creating integrated software solutions that
            enhance user experience and streamline organizational operations.
            <br />
            I completed my Bachelor of Technology (B.Tech) in Information
            Technology from SNS College of Engineering, Coimbatore, in 2023,
            achieving exceptional academic results.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing Software Solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chandru Vijayakumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
