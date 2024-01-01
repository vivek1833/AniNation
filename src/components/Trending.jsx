import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
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

export default Trending;
