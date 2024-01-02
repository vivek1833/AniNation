import React, { useState } from "react";
import { Container, Row, } from "react-bootstrap";
import Navbar from "./Navbar";
import { genre } from "../utils/api";
import CardComponent from "./Card";

const Genre = () => {
  const [data, setData] = useState([]);

  const getGenre = async () => {
    try {
      const res = await genre();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Row>
          <Container className="text-center">
            <h1>AniPlay</h1>
          </Container>

          <Navbar />

            <CardComponent data={data.animes} />

        </Row>
      </Container>
    </>
  );
};

export default Genre;
