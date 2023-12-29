import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Video from "./Video";
import Navbar from "./Navbar";

const Episode = () => {
  const { title } = useParams();
  const ep = useLocation().search;
  const [episode, setEpisode] = useState([]);

  // Get Total Anime Episodes
  const getEpisode = async () => {
    try {
      const response = await fetch(
        `https://api-aniwatch.onrender.com/anime/episodes/${title}`
      );
      const jsonData = await response.json();
      setEpisode(jsonData.episodes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Navbar />
        <hr />
        <h1 className="text-center">You are Watching {title.slice(0, 15)}</h1>

        <Row>
          <Col xs={12} sm={12} md={10} lg={10}>
            {ep ? <Video id={title + ep} /> : ""}
          </Col>
          <Col xs={12} sm={12} md={2} lg={2}>
            <Container
              className="mt-3 bg-dark scrollbar"
              fluid
              style={{
                height: "470px",
                overflowY: "scroll",
                overflowX: "hidden",
                borderRadius: "5px",
                scrollbarWidth: "thin",
              }}>
              <Row>
                {episode &&
                  episode.map((epis) => (
                    <Col key={epis.episodeId}>
                      <Link to={`/watch/${epis.episodeId}`}>
                        <Button className="btn btn-secondary btn-sm mt-1">
                          {epis.number} {". "} {epis.title}
                        </Button>
                      </Link>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Episode;
