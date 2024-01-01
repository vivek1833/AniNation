import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import CardComponent from "./Card";

const Search = () => {
  const [anime, setAnime] = useState([]);
  const [data, setData] = useState([]);

  const getAnime = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api-aniwatch.onrender.com/anime/search?q=${anime}`
      );

      const data = await res.json();
      setData(data.animes);
      setAnime("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Container className="text-center">
          <h1>AniPlay</h1>
        </Container>

        <Navbar />

        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col md={7} sm={12} lg={7} xl={7}>
              <Form className="text-center">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="anime"
                    id="anime"
                    placeholder="Search Anime..."
                    value={anime}
                    autoComplete="false"
                    className="text-center my-2 border border-dark shadow p-2 bg-dark text-white rounded-pill"
                    onChange={(e) => setAnime(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => getAnime(e)}
                  className="d-none"></Button>
              </Form>
            </Col>
          </Row>
        </Container>

        {data.length ? (
          <Container className="mt-3">
            <CardComponent data={data} />
          </Container>
        ) : (
          <Container>
            <Row className="bgImg justify-content-center">
              <Col md={5} sm={12} lg={5} xl={5}>
                <Image
                  src="https://s2.bunnycdn.ru/assets/t1/s1/imagesv3/bg-index-top1.png"
                  fluid
                  className="mx-auto d-block"
                />
              </Col>
            </Row>
          </Container>
        )}

        <hr className="mt-2" />
      </Row>
    </Container>
  );
};

export default Search;
