import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactHlsPlayer from "react-hls-player";
import { getLink } from "../utils/api";

const Video = (props) => {
  const [link, setLink] = useState([]);
  const [sub, setSub] = useState([]);

  // Get a particular episode
  const getVideo = async () => {
    const res = await getLink({ id: props.id });
    console.log(res);
    setLink(res.sources);
    setSub(res.subtitles);
  };

  useEffect(() => {
    getVideo();
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
