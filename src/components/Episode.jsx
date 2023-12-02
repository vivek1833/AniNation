import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";

const Episode = () => {
  const { title } = useParams();

  const [episode, setEpisode] = useState([]);

  const getEpisode = async () => {
    try {
      const response = await fetch(
        `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${title}?ep=1`
      );
      const jsonData = await response.json();
      setEpisode(jsonData.sources);
      console.log(episode[0]);
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
            {/* <iframe src={episode[0]}></iframe> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Episode;
