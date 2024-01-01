import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Navbar from "./Navbar";

const Anime = () => {
  const { title } = useParams();

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnime = async () => {
      const res = await fetch(
        `https://api-aniwatch.onrender.com/anime/info?id=${title}`
      );

      const data = await res.json();
      setInfo(data);
      setLoading(false);
    };
    getAnime();
  }, [title]);

  return (
    <>
      <Container className="mt-5">
        <Navbar />
        <hr />
        {loading ? (
          <Container className="text-center mt-5">
            <Container
              className="spinner-border text-warning"
              role="status"></Container>
          </Container>
        ) : (
          <Container className="text-center">
            <Row>
              <Col md={4} sm={12} lg={4} xl={4}>
                <Image src={info.anime.info.poster} fluid />
              </Col>
              <Col md={8} sm={12} lg={8} xl={8}>
                <h1>{info.anime.info.name}</h1>
                <p className="d-none d-md-block">
                  {info.anime.info.description}
                </p>
              </Col>

              <Col>
                <Link
                  to={`/watch/${info.anime.info.id}`}
                  className="text-decoration-none text-white">
                  <Button variant="warning" className="m-2">
                    Watch Now
                  </Button>
                </Link>

                <Button
                  variant="warning"
                  onClick={() => {
                    localStorage.setItem(
                      info.anime.info.id,
                      JSON.stringify(info.anime.info)
                    );
                    alert("Added to watch later");
                  }}>
                  Watch later
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                {info.seasons.length !== 0 ? (
                  <h3>More Season of {info.anime.info.name}</h3>
                ) : (
                  ""
                )}
                {info.seasons.map((anime) => (
                  <Link to={`/anime/${anime.id}`} key={anime.id}>
                    <Image src={anime.poster} fluid className="m-2" />
                  </Link>
                ))}
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
};

export default Anime;
