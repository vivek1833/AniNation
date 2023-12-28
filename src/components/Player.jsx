import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactHlsPlayer from "react-hls-player";

const Player = (props) => {
  const [link, setLink] = useState([]);
  const [sub, setSub] = useState([]);

  // Get a particular episode
  const getLink = async () => {
    try {
      const response = await fetch(
        `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${props.id}&server=vidstreaming&category=sub`
      );
      const jsonData = await response.json();
      setLink(jsonData.sources);
      setSub(jsonData.subtitles);
      console.log(jsonData);
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
        {link.length && sub.length ? (
          // Add subtities to the video
          <ReactHlsPlayer
            src={link[0].url}
            controls={true}
            width="100%"
            crossOrigin="anonymous"
            height="auto">
            <track
              label={sub[0].lang}
              kind="subtitles"
              srcLang={sub[0].lang}
              src={sub[0].url}
              default
            />
            <controls

          </ReactHlsPlayer>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Player;
