import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Trending = () => {
  const [anime, setAnime] = useState([]);

  const gettrendingAnimes = async () => {
    try {
      const res = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
      const data = await res.json();
      console.log(data);
      setAnime(data.trendingAnimes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    gettrendingAnimes();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Container className="text-center">
            <h1>AniPlay</h1>
          </Container>
        </Row>

        <Navbar />
        <Container className="mt-5">
          <Row>
            <Col>
              <h1 className="text-center">Trending Animes</h1>
            </Col>
          </Row>
        </Container>
        <Row>
          {anime &&
            anime.map((iter) => (
              <Col md={3} sm={12} lg={3} xl={3}>
                <Card key={iter.id} className="m-2" bg="dark" text="light">
                  <Card.Img variant="top" src={iter.poster} />
                  <Card.Body>
                    <Card.Title>{iter.name}</Card.Title>
                    <Card.Text>{iter.rank}</Card.Text>
                    <Link to={`/anime/${iter.id}`}>
                      <Button variant="primary">Watch Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Trending;
