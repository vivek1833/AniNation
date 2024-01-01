import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Container className="mt-3">
        <Row md="auto" className="justify-content-center text-center">
          <Col>
            <Link to="/home" className="text-white text-decoration-none">
              Home
            </Link>
          </Col>
          <Col>
            <Link to="/trending" className="text-white text-decoration-none">
              Trending
            </Link>
          </Col>
          <Col>
            <Link to="/latest" className="text-white text-decoration-none">
              Latest
            </Link>
          </Col>
          <Col>
            <Link to="/about" className="text-white text-decoration-none">
              About
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
