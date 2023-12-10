import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Player from "./Player";

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
      console.log(jsonData.episodes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <>
      <Container className="mt-5">
        {ep ? <Player id={title + ep} /> : ""}

        <Row>
          <Col>
            {episode &&
              episode.map((epis) => (
                <Link to={`/watch/${epis.episodeId}`} key={epis.episodeId}>
                  <Button className="btn btn-secondary m-1">
                    {epis.number} {". "} {epis.title}
                  </Button>
                </Link>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Episode;
