import React, { useState, useEffect } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Navbar from "./Navbar";
import { movie } from "../utils/api";
import CardComponent from "./Card";

const Movie = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState();
  const [totalPage, setTotalPage] = useState();
  const [hasNextPage, setHasNextPage] = useState();

  const getMovies = async () => {
    try {
      const res = await movie({ page: page });
      setData(res);
      setCurrentPage(res.currentPage);
      setTotalPage(res.totalPages);
      setHasNextPage(res.hasNextPage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Container className="text-center">
            <h1 className="display-4 text-bold">AniNation</h1>
          </Container>
        </Row>

        <Navbar />
        <hr />
        <Row>
          <Col>
            <h1 className="text-center">Movies</h1>
          </Col>
        </Row>

        {data && data.animes ? (
          <>
            <CardComponent data={data.animes} />

            <Container className="text-center mt-3">
              <Pagination
                className="justify-content-center text-warning"
                size="sm">
                {page > 1 && currentPage > 1 ? (
                  <>
                    <Pagination.First
                      onClick={() => {
                        setPage(1);
                      }}
                    />
                    <Pagination.Prev
                      onClick={() => {
                        if (page > 1 && currentPage > 1) {
                          setPage(page - 1);
                        }
                      }}
                    />

                    <Pagination.Item
                      onClick={() => {
                        if (page > 1 && currentPage > 1) {
                          setPage(page - 1);
                        }
                      }}>
                      {page - 1}
                    </Pagination.Item>
                  </>
                ) : (
                  ""
                )}

                <Pagination.Item active>{page}</Pagination.Item>

                {hasNextPage && currentPage < totalPage ? (
                  <>
                    <Pagination.Item
                      onClick={() => {
                        if (hasNextPage) {
                          setPage(page + 1);
                        }
                      }}>
                      {page + 1}
                    </Pagination.Item>

                    <Pagination.Next
                      onClick={() => {
                        if (hasNextPage) {
                          setPage(page + 1);
                        }
                      }}
                    />
                    <Pagination.Last
                      onClick={() => {
                        setPage(totalPage);
                      }}
                    />
                  </>
                ) : (
                  ""
                )}
              </Pagination>
            </Container>
          </>
        ) : (
          <Container className="text-center mt-5">
            <Container
              className="spinner-border text-warning"
              role="status"></Container>
          </Container>
        )}

        <hr className="mt-5" />
      </Container>
    </>
  );
};

export default Movie;
