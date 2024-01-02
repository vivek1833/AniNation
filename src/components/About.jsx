import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
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
            <h1 className="text-center">About Us</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center">
              AniPlay is a website that allows you to watch anime for free. It
              is a website that uses the AniWatch API to get the anime data and
              then displays it on the website. It is a website that is made by
              Vivek. It uses a API to get the data and then displays it on the
              website. API Link :
              <Link
                to="https://github.com/ghoshRitesh12/aniwatch-api"
                className="text-decoration-none">
                aniwatch-api
              </Link>
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="text-center">About the Creator</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link
              to="https://github.com/vivek1833"
              className="text-center mx-auto d-block text-decoration-none">
              <Image
                src="https://avatars.githubusercontent.com/u/105587161?v=4"
                fluid
                loading="lazy"
                style={{
                  width: "100px",
                  height: "100px",
                  mouse: "pointer",
                }}
                className="mx-auto d-block"
              />
              <p className="text-center text-decoration-none">Vivek</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
