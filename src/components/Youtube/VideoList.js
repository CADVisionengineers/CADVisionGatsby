import React from "react";
import styled, { css } from "styled-components";

import VideoItem from "./VideoItem";

const StyledVideoList = styled.ul`
  list-style: none;
  padding-left: 16px;
  padding-right: 16px;
  border-top: 1px solid #e2e2e2;

  > li {
    border-top: 1px solid #e2e2e2;

    &:first-child {
      padding-top: 12px;
      border-top: none;
    }
  }

  @media screen and (min-width: 768px) {
    border-top: none;
    margin-left: 12px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
    margin-right: 12px;
  }
`;

const VideoList = ({ videos, onVideoSelect }) => {
  const list = videos.map(video => (
    <VideoItem
      key={video.snippet.title}
      video={video}
      as="li"
      onSelect={onVideoSelect}
    />
  ));

  return <StyledVideoList>{list}</StyledVideoList>;
};

export default VideoList;
