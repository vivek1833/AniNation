import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactHlsPlayer from "react-hls-player";

const Player = (props) => {
  const [link, setLink] = useState([]);

  // Get a particular episode
  const getLink = async () => {
    try {
      const response = await fetch(
        `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${props.id}&server=vidstreaming&category=sub`
      );
      const jsonData = await response.json();
      setLink(jsonData.sources);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLink();
  }, [props.id]);

  return (
    <>
      <Container className="mt-5">
        {link.length ? (
          <ReactHlsPlayer
            src={link[0].url}
            controls={true}
            width="100%"
            height="auto"
            hlsConfig={{
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              lowLatencyMode: true,
            }}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Player;
