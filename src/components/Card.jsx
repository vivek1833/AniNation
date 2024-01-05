import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

const CardComponent = ({ data }) => {
  return (
    <>
      {data && data[0].episodes ? (
        <Row className="justify-content-center">
          {data &&
            data.map((item) => (
              <Col
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={2}
                className="mt-3 homeItem"
                key={item.id}>
                <Link
                  to={`/anime/${item.id}`}
                  className="text-decoration-none text-white">
                  <Card
                    className="bg-dark text-white card"
                    style={{
                      border: "none",
                      height: "285px",
                    }}>
                    <Card.Img
                      src={item.poster}
                      alt={item.name}
                      loading="lazy"
                      className="mx-auto d-block"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.ImgOverlay>
                      <Card.Text className="d-flex justify-content-between">
                        <Button variant="info" className="btn btn-sm">
                          <i className="bi bi-badge-cc-fill"></i>{" "}
                          {item.episodes.sub ? item.episodes.sub : "0"}
                        </Button>
                        <Button variant="warning" className="btn btn-sm ">
                          {item.episodes.dub ? item.episodes.dub : "0"}
                        </Button>
                      </Card.Text>
                    </Card.ImgOverlay>
                    <Card.Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                        textAlign: "center",
                        marginTop: "2px",
                      }}>
                      {item.name.length < 23
                        ? item.name
                        : item.name.substr(0, 23) + "..."}
                    </Card.Text>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      ) : (
        <Row className="justify-content-center">
          {data.map((item) => (
            <Col
              xs={6}
              sm={6}
              md={3}
              lg={3}
              xl={2}
              className="mt-3 homeItem"
              key={item.id}>
              <Link
                to={`/anime/${item.id}`}
                className="text-decoration-none text-white">
                <Card
                  className="bg-dark text-white"
                  style={{
                    border: "none",
                    height: "285px",
                  }}>
                  <Card.Img
                    src={item.poster}
                    alt={item.name}
                    loading="lazy"
                    className="mx-auto d-block"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Text
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      marginTop: "2px",
                    }}>
                    {item.name.length < 23
                      ? item.name
                      : item.name.substr(0, 23) + "..."}
                  </Card.Text>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default CardComponent;
