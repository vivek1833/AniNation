import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Image,
  Carousel,
} from "react-bootstrap";
import CardComponent from "./Card.jsx";
import Footer from "./Footer.jsx";
import { homePage } from "../utils/api.jsx";

const Home = () => {
  const [data, setData] = useState([]);

  const getHomePage = async () => {
    try {
      const res = await homePage();
      setData(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHomePage();
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        sticky="top"
        style={{ backgroundColor: "#1a1a1a" }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2  "
              alt="AniPlay"
            />
            AniPlay
          </Navbar.Brand>
          <Navbar>
            <Link to="/" className="btn btn-sm d-block ms-auto" role="button">
              <Button variant="warning">Search</Button>
            </Link>
          </Navbar>
        </Container>
      </Navbar>

      {data.length === 0 ? (
        <Container className="text-center mt-5">
          <Container
            className="spinner-border text-warning"
            role="status"></Container>
        </Container>
      ) : (
        <>
          <Carousel fade>
            {data.spotlightAnimes &&
              data.spotlightAnimes.map((item) => (
                <Carousel.Item key={item.id}>
                  <Image src={item.poster} alt={item.name} loading="lazy" />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p className="d-none d-md-block">
                      {item.description.slice(0, 250)}...
                    </p>
                    <Link
                      to={`/anime/${item.id}`}
                      className="text-white text-decoration-none">
                      <Button variant="warning">Watch Now</Button>
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>

          <Container className="mt-5">
            <h3>
              <b className="text-warning">Trending</b>
            </h3>
            <CardComponent data={data.trendingAnimes} />

            <hr />

            <h3>
              <b className="text-warning mt-5">Latest</b>
            </h3>
            <CardComponent data={data.latestEpisodeAnimes} />

            <hr />

            <h3>
              <b className="text-warning mt-5">Top-Airing</b>
            </h3>
            <CardComponent data={data.topAiringAnimes} />

            <hr />

            <h3>
              <b className="text-warning mt-5">Top-Upcoming</b>
            </h3>
            <CardComponent data={data.topUpcomingAnimes} />

            <hr />

            <h3>
              <b className="text-warning mt-5">Genres</b>
            </h3>
            <Row>
              {data.genres &&
                data.genres.map((item) => (
                  <Col className="mt-3" key={item}>
                    <Link
                      to={`/genre/${item}`}
                      className="text-decoration-none text-white">
                      <Button className="btn btn-sm ">{item}</Button>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
