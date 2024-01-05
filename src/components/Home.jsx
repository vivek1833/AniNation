import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Button, Image, Carousel } from "react-bootstrap";
import CardComponent from "./Card.jsx";
import Footer from "./Footer.jsx";
import { homePage } from "../utils/api.jsx";

const Home = () => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const getList = () => {
    try {
      const res = localStorage.getItem("list");
      setList(JSON.parse(res));
    } catch (error) {
      console.error(error);
    }
  };

  const getHomePage = async () => {
    try {
      const res = await homePage();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
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
          <Navbar.Brand href="/" className="text-white head text-bold">
            <Image
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="AniNation"
              loading="lazy"
            />
            <span className="text-warning">Ani</span>
            Nation
          </Navbar.Brand>
          <Navbar>
            <Link to="/" className="ms-auto">
              <Button variant="warning" className="btn btn-sm">
                <i className="bi bi-search"></i> Search
              </Button>
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
                    <h3 className="text-bold">{item.name}</h3>
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
              <b className="text-warning mt-5">Watch-Later List</b>
            </h3>
            {list && list.length > 0 ? (
              <CardComponent data={list} />
            ) : (
              <Container className="text-center mt-5">
                <h4 className="text-warning">
                  <i className="bi bi-emoji-frown-fill text-warning"></i> No
                  Anime in Watch Later
                </h4>
              </Container>
            )}

            <hr />

            <h3>
              <b className="text-warning mt-5">Genres</b>
            </h3>
            {data.genres &&
              data.genres.map((item) => (
                <Link
                  key={item}
                  to={`/genre/${item}`}
                  className="text-decoration-none text-white">
                  <Button className="btn btn-sm m-1">{item}</Button>
                </Link>
              ))}
          </Container>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
