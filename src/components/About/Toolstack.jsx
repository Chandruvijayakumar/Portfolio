import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman } from "react-icons/si";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
    </Row>
  );
}

export default Toolstack;
