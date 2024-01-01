import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
        {anime.length === 0 ? (
          <Container className="text-center mt-3">
            <Container
              className="spinner-border text-warning"
              role="status"></Container>
          </Container>
        ) : (
          <Container className="mt-3">
            <Row className="justify-content-center">
              {anime &&
                anime.map((item) => (
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
        )}
        <hr className="mt-2" />
      </Container>
    </>
  );
};

export default Latest;
