import React from "react";
import styled, { css } from "styled-components";
import { YOUTUBE_EMBEDD_URL } from "../../constants";

const VideoDescription = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 8px 16px;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    margin: 12px 16px;
  }
`;

const IframContainer = styled.div`
  width: 100%;
  height: auto;

  > div {
    position: relative;
    padding-top: 56%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
`;
const VideoDetail = ({ video }) => {
  if (!video) return null;

  const { snippet, id } = video;
  const { title, description } = snippet;
  const videoSrc = `${YOUTUBE_EMBEDD_URL}${id.videoId}`;
  return (
    <div>
      <div className="continer">
      <IframContainer>
        <div>
          <iframe src={videoSrc} title={title} />
        </div>
      </IframContainer>
      <VideoDescription>
        <h2>{title}</h2>
        <p>{description}</p>
      </VideoDescription>
    </div>
    </div>
  );
};

export default VideoDetail;
