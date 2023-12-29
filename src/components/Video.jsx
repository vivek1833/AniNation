import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactHlsPlayer from "react-hls-player";

const Video = (props) => {
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
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLink();
  }, [props.id]);

  return (
    <>
      <Container fluid className="mt-3">
        {link.length && sub.length ? (
          <ReactHlsPlayer
            src={link[1].url}
            controls={true}
            autoPlay={true}
            width="100%"
            height="auto"
            crossOrigin="anonymous"
            hlsConfig={{
              maxMaxBufferLength: 100,
              maxBufferSize: 100,
              maxBufferLength: 100,
            }}>
            {sub.map((it) => (
              <track
                label={it.lang}
                kind="subtitles"
                srcLang={it.lang}
                src={it.url}
                key={it.lang}
              />
            ))}
          </ReactHlsPlayer>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Video;
