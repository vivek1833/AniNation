import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";

const Episode = () => {
  const { title } = useParams();

  const [episode, setEpisode] = useState([]);

  const getEpisode = async () => {
    try {
      const response = await fetch(`http://localhost:8000/anime-details/${title}`);
      const jsonData = await response.json();
      setEpisode(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Episodes</h1>
            {/* <iframe
              src={episode}
              title="video"
              width="100%"
              height="500"
              frameborder="0"
              allowFullScreen></iframe> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Episode;
