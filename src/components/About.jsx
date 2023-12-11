import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Container className="text-center">
            <h1>AniPlay</h1>
          </Container>
        </Row>

        <Navbar />
        <hr />

        <Row>
          <Col>
            <h1 className="text-center">About</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
