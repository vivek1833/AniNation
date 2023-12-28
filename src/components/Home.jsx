import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import Navbar from "./Navbar";

const Home = () => {
  const [anime, setAnime] = useState([]);
  const [data, setData] = useState([]);

  const getAnime = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api-aniwatch.onrender.com/anime/search?q=${anime}`
    );

    const data = await res.json();
    setData(data.animes);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Container className="text-center">
          <h1>AniPlay</h1>
        </Container>

        <Navbar />

        {/* Search Bar */}
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col md={7} sm={12} lg={7} xl={7}>
              <Form className="text-center">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search Anime..."
                    className="text-center my-2 border border-dark shadow p-2 bg-dark text-white rounded-pill"
                    onChange={(e) => setAnime(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={getAnime}
                  className="d-none"></Button>
              </Form>
            </Col>
          </Row>
        </Container>

        {data.length ? (
          <Container className="mt-5">
            <Row className="justify-content-center">
              {data.map((item) => (
                <Col
                  md={3}
                  sm={12}
                  lg={3}
                  xl={3}
                  className="mt-3 homeItem"
                  key={item.id}>
                  <Link to={`/anime/${item.id}`}>
                    <Image
                      src={item.poster}
                      fluid
                      loading="lazy"
                      className="mx-auto d-block"
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Container>
            <Row className="bgImg justify-content-center">
              <Col md={5} sm={12} lg={5} xl={5}>
                <Image
                  src="https://s2.bunnycdn.ru/assets/t1/s1/imagesv3/bg-index-top1.png"
                  fluid
                  className="mx-auto d-block"
                />
              </Col>
            </Row>
          </Container>
        )}
      </Row>
    </Container>
  );
};

export default Home;
