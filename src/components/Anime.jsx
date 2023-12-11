import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";

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
  }, []);

  return (
    <>
      <Container className="mt-5">
        {loading ? (
          <Container className="text-center">
            <h1>Loading...</h1>
          </Container>
        ) : (
          <Container className="text-center">
            <Row>
              <Col md={4} sm={12} lg={4} xl={4}>
                <Image src={info.anime.info.poster} fluid />
              </Col>
              <Col md={8} sm={12} lg={8} xl={8}>
                <h1>{info.anime.info.name}</h1>
                <p>{info.anime.info.description.substring(0, 200)}...</p>
              </Col>

              <Col>
                <Button variant="warning" className="m-2">
                  <Link
                    to={`/watch/${info.anime.info.id}`}
                    className="text-white text-decoration-none">
                    Watch Now
                  </Link>
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <h3>More Season of {info.anime.info.name}</h3>
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
