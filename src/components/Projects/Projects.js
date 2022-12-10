import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mailbox from "../../Assets/Projects/mailbox.jpg";
import expense from "../../Assets/Projects/expense.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import images from "../../Assets/Projects/images.JPG";
import food from "../../Assets/Projects/food.jpg";

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
              imgPath={mailbox}
              isBlog={false}
              title="Mail box client"
              description="Created a mail box application where users can login , send and receive
              messages."
              ghLink="https://github.com/SushmaGowda7/mail-box-client-react-app"
              demoLink="https://mail-box-client-d6ce4.firebaseapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Created an expense tracker where a user can sign up and login, add and
              remove expenses and also download the expenses."
              ghLink="https://github.com/SushmaGowda7/Expence-Tracker-react-app"
              demoLink="https://expense-tracker-authentication.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="Created an ecommerce website where a user can add and remove
              products to the cart ."
              ghLink="https://github.com/SushmaGowda7/e-commerce-website"
              demoLink="https://e-commerce-website-react.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images}
              isBlog={false}
              title="Infinite Image Gallery"
              description="Displays infinite images from the Unsplash API"
              ghLink="https://github.com/SushmaGowda7/Infinite-image-gallery-react"
              demoLink="https://infinite-scroll-img-gallery-unsplash.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Restaurant App"
              description="Online food ordering application"
              ghLink="https://github.com/SushmaGowda7/restruant-app"
              demoLink="https://restraunt-react.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
