import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Navbar from "./Navbar";

const Latest = () => {
  const [anime, setAnime] = useState([]);

  const getlatestAnimes = async () => {
    try {
      const res = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
      const data = await res.json();
      setAnime(data.latestEpisodeAnimes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getlatestAnimes();
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
        <Row>
          <Col>
            <h1 className="text-center">Latest Episodes</h1>
          </Col>
        </Row>
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

export default Latest;
