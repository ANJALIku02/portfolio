import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ugc_net from "../../Assets/Projects/ugc_net.png";
import Healthkey_Nutrition from "../../Assets/Projects/Healthkey.png";
import thelushlife from "../../Assets/Projects/thelushlife.png";

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
              imgPath={Healthkey_Nutrition}
              isBlog={false}
              title="Healthkey-Nutrition"
              description="healthkeynutrition.com is a website dedicated to providing a range of health and wellness products. They offer supplements and nutritional products designed to support various health needs, such as vitamins, minerals, and other dietary supplements."
              ghLink="https://healthkeynutrition.com/"
              demoLink="https://healthkeynutrition.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thelushlife}
              isBlog={false}
              title="The-Lush-Life"
              description="At The Lush Life, we redefine interior design with our unwavering commitment to innovation, creativity and meticulous attention to detail. Our team excels in pushing the boundaries of design by utilizing cutting-edge materials, technologies and techniques."
              ghLink="https://www.thelushlife.co.in/"
              demoLink="https://www.thelushlife.co.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ugc_net}
              isBlog={false}
              title="UGC-NET"
              description="UGC NET serves as a qualifying test for individuals aspiring to become Assistant Professors or pursue Junior Research Fellowships in Indian universities and colleges. Our project aims to provide aspiring candidates with the necessary resources, guidance and support to excel in the UGC NET examination."
              ghLink="https://https://ugc-net.com/"
              demoLink="https://https://ugc-net.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
