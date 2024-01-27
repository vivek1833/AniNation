import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  ButtonGroup,
} from "react-bootstrap";
import Navbar from "./Navbar";
import CardComponent from "./Card";
import { getAnime } from "../utils/api";

const Anime = () => {
  const { title } = useParams();
  const [info, setInfo] = useState([]);

  const addToWatchLater = () => {
    const list = localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];

    list.push(info.anime.info);
    localStorage.setItem("list", JSON.stringify(list));
    alert("Added to watch later");
    window.location.reload();
  };

  const removeFromWatchLater = () => {
    const list = JSON.parse(localStorage.getItem("list"));

    const newList = list.filter((anime) => anime.id !== info.anime.info.id);
    localStorage.setItem("list", JSON.stringify(newList));
    alert("Removed from watch later");
    window.location.reload();
  };

  const getAnimeInfo = async () => {
    const res = await getAnime({ title });
    setInfo(res);
  };

  useEffect(() => {
    getAnimeInfo();
  }, [title]);

  return (
    <>
      <Container className="mt-5">
        <Navbar />
        <hr />
        {info && info.length === 0 ? (
          <Container className="text-center mt-5">
            <Container
              className="spinner-border text-warning"
              role="status"></Container>
          </Container>
        ) : (
          <Container className="text-center">
            <Row>
              <h1 className="text-white mb-3">{info.anime.info.name}</h1>
              <Col md={4} sm={12} lg={4} xl={4}>
                <Image
                  fluid
                  src={info.anime.info.poster}
                  alt={info.anime.info.name}
                />
                <Container className="mt-3">
                  <ButtonGroup size="sm">
                    <Button
                      variant="info"
                      className="btn btn-sm"
                      style={{
                        cursor: "text",
                      }}>
                      <i className="bi bi-badge-cc-fill"></i>{" "}
                      {info.anime.info.stats.episodes.sub
                        ? info.anime.info.stats.episodes.sub
                        : "0"}
                    </Button>
                    <Button
                      variant="warning"
                      className="btn btn-sm "
                      style={{
                        cursor: "text",
                      }}>
                      <i className="bi bi-mic-fill"></i>{" "}
                      {info.anime.info.stats.episodes.dub
                        ? info.anime.info.stats.episodes.dub
                        : "0"}
                    </Button>

                    <Button
                      variant="danger"
                      className="btn btn-sm"
                      style={{
                        cursor: "text",
                      }}>
                      <i className="bi bi-star-fill text-warning"></i>{" "}
                      {info.anime.moreInfo.malscore}
                    </Button>
                  </ButtonGroup>
                  <Button
                    variant="secondary"
                    className="btn btn-sm"
                    style={{
                      cursor: "text",
                    }}>
                    <i className="bi bi-tv-fill"></i>{" "}
                    {info.anime.moreInfo.status}
                  </Button>
                </Container>
              </Col>
              <Col md={8} sm={12} lg={8} xl={8}>
                <p className="d-none d-md-block">
                  {info.anime.info.description}
                </p>
              </Col>

              <Col className="mt-3">
                <Link
                  to={`/watch/${info.anime.info.id}`}
                  className="text-decoration-none text-white">
                  <Button variant="warning" className="m-2">
                    Watch Now
                  </Button>
                </Link>

                {localStorage.getItem("list") &&
                JSON.parse(localStorage.getItem("list")).find(
                  (anime) => anime.id === info.anime.info.id
                ) ? (
                  <Button
                    variant="light"
                    className="m-2"
                    onClick={removeFromWatchLater}>
                    <i className="bi bi-heart-fill text-danger"></i>
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    onClick={addToWatchLater}
                    className="m-2">
                    <i className="bi bi-heart text-danger"></i>
                  </Button>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                {info.seasons.length !== 0 ? (
                  <>
                    <hr />
                    <h3>More Season of {info.anime.info.name}</h3>
                    <CardComponent data={info.seasons} />
                  </>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Container>
        )}
        <hr className="mt-5" />
      </Container>
    </>
  );
};

export default Anime;
