import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Clone from "../../Assets/Projects/Clone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clone}
              isBlog={false}
              title="Gmail Clone"
              description={
                <ul>
                  <li>
                    Developed a full Gmail functionality clone featuring user
                    authentication, email composition, inbox management, and
                    search.
                  </li>
                  <li>
                    Utilizes the MERN stack (MongoDB, Express.js, React.js,
                    Node.js) for seamless integration.
                  </li>
                  <li>
                    UI mimics Gmail's interface for a familiar user experience.
                  </li>
                  <li>Efficient data management through MongoDB.</li>
                  <li>
                    Deployment on Netlify for the frontend and Render for the
                    backend.
                  </li>
                </ul>
              }
              ghLink="https://github.com/Chandruvijayakumar/Gmail-Front-End"
              demoLink="https://newgmail-clone.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
