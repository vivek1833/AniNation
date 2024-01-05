import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { genre } from "../utils/api";
import CardComponent from "./Card";

const Genre = () => {
  const [data, setData] = useState([]);
  let { title } = useParams();

  const getGenre = async () => {
    try {
      title = title.toLowerCase();
      const res = await genre({ name: title });
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Container className="text-center">
            <h1 className="display-4 text-bold">
              <span className="text-warning">Ani</span>
              Nation
            </h1>
          </Container>

          <Navbar />

          <hr />

          {data && data.length === 0 ? (
            <Container className="text-center mt-5">
              <Container
                className="spinner-border text-warning"
                role="status"></Container>
            </Container>
          ) : (
            <>
              <Row>
                <Col>
                  <h1 className="text-center">{data.genreName}</h1>
                </Col>
              </Row>

              <Container className="mt-3">
                <CardComponent data={data.animes} />
              </Container>
            </>
          )}

          <hr className="mt-5" />
        </Row>
      </Container>
    </>
  );
};

export default Genre;
