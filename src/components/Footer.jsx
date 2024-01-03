import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="text-white mt-5"
        style={{
          backgroundColor: "#1a1a1a",
        }}>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p className="mt-3">
              AniNation does not store any files on our server, we only linked to
              the media which is hosted on 3rd party services.
            </p>
            <p>© AniNation. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
