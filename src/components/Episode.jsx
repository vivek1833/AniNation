import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Video from "./Video";
import Navbar from "./Navbar";
import { getEpisode } from "../utils/api";

const Episode = () => {
  const { title } = useParams();
  const ep = useLocation().search;
  const [episode, setEpisode] = useState([]);

  // Get Total Anime Episodes
  const episodeList = async () => {
    const res = await getEpisode({ title });
    setEpisode(res);
  };

  useEffect(() => {
    episodeList();
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Navbar />
        <hr />
        <h1 className="text-center">You are Watching {title.slice(0, 15)}</h1>

        <Row>
          <Col xs={12} sm={12} md={10} lg={10}>
            {ep ? (
              <Video id={title + ep} />
            ) : (
              <>
                <Container className="mt-3">
                  <h4 className="text-center text-danger mt-5">
                    Select Episode
                  </h4>
                </Container>
              </>
            )}
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
              {episode &&
                episode.map((epis) => (
                  <Link to={`/watch/${epis.episodeId}`} key={epis.episodeId}>
                    <Button className="btn btn-secondary btn-sm m-1">
                      {epis.number}
                    </Button>
                  </Link>
                ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Episode;
