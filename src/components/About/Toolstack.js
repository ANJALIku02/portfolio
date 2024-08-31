import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNpm,
  SiMicrosoft,
  SiGooglechrome,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>
    </Row>
  );
}

export default Toolstack;
