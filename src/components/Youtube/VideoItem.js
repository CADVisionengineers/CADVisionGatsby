import React from "react";
import styled from "styled-components";

import Image from "../Youtube/Image";

const StyledVideoList = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;

  > div:first-child {
    min-width: 30%;
  }
`;

const VideoTitle = styled.h3`
  text-transform: capitalize;
  color: #484848;
  line-height: 1.2;
  font-weight: normal;
  padding-left: 12px;
`;
const onVideoSelect = (video, onSelect) => {
  if (onSelect) {
    onSelect(video);
  }
};

const VideoItem = ({ video, onSelect, ...otherProps }) => {
  const { snippet } = video;
  const { thumbnails, title } = snippet;
  return (
    <StyledVideoList
      {...otherProps}
      onClick={onVideoSelect.bind(null, video, onSelect)}
    >
      <Image src={thumbnails.default.url} alt={title} ratio="4:3" />
      <VideoTitle>{title}</VideoTitle>
    </StyledVideoList>
  );
};

export default VideoItem;
