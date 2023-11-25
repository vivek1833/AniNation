import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { ANIME } from "@consumet/extensions";

const Anime = () => {
  const { title } = useParams();
  const gogoanime = new ANIME.Gogoanime();

  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnime = async () => {
      const results = gogoanime.search({ query: "naruto" });

      setAnime(results);
      console.log(results);
      setLoading(false);
    };
    getAnime();
  }, []);

  return (
    <>
      <Container className="mt-5">
        {loading ? (
          <Container className="text-center">
            <h1>Loading...</h1>
          </Container>
        ) : (
          <Row>
            <Col>
              <h1>Anime</h1>
            </Col>
          </Row>
        )}{" "}
      </Container>
    </>
  );
};

export default Anime;
