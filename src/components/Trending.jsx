import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Trending = () => {
  const [anime, setAnime] = useState([]);

  const gettrendingAnimes = async () => {
    try {
      const res = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
      const data = await res.json();
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
        <hr />
        <Container className="mt-2">
          <Row>
            <Col>
              <h1 className="text-center">Trending Animes</h1>
            </Col>
          </Row>
        </Container>
        <Row>
          {anime &&
            anime.map((iter) => (
              <Col
                md={3}
                sm={12}
                lg={3}
                xl={3}
                className="mt-3 homeItem"
                key={iter.id}>
                <Link to={`/anime/${iter.id}`}>
                  <Image
                    src={iter.poster}
                    fluid
                    loading="lazy"
                    className="mx-auto d-block"
                  />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Trending;
