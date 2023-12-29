import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Card,
} from "react-bootstrap";
import Navbar from "./Navbar";

const Home = () => {
  const [anime, setAnime] = useState([]);
  const [data, setData] = useState([]);

  const getAnime = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api-aniwatch.onrender.com/anime/search?q=${anime}`
      );

      const data = await res.json();
      setData(data.animes);
    } catch (error) {
      console.error(error);
    }
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
          <Container className="mt-3">
            <Row className="justify-content-center">
              {data.map((item) => (
                <Col
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={2}
                  className="mt-3 homeItem"
                  key={item.id}>
                  <Link
                    to={`/anime/${item.id}`}
                    className="text-decoration-none text-white">
                    <Card
                      className="bg-dark text-white"
                      style={{
                        border: "none",
                        height: "285px",
                      }}>
                      <Card.Img
                        src={item.poster}
                        alt={item.name}
                        loading="lazy"
                        className="mx-auto d-block"
                        style={{
                          height: "260px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.ImgOverlay>
                        <Card.Text className="d-flex justify-content-between">
                          <Button variant="info" className="btn btn-sm">
                            <i className="bi bi-badge-cc-fill"></i>{" "}
                            {item.episodes.sub ? item.episodes.sub : "0"}
                          </Button>
                          <Button variant="warning" className="btn btn-sm ">
                            {item.episodes.dub ? item.episodes.dub : "0"}
                          </Button>
                        </Card.Text>
                      </Card.ImgOverlay>
                      <Card.Text
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          textAlign: "center",
                          marginTop: "2px",
                        }}>
                        {item.name.length < 23
                          ? item.name
                          : item.name.substr(0, 23) + "..."}
                      </Card.Text>
                    </Card>
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

        <hr className="mt-2" />
      </Row>
    </Container>
  );
};

export default Home;
