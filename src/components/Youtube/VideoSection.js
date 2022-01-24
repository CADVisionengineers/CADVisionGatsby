import React from "react";
import styled from "styled-components";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const StyledVideoSection = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 16px 0 16px 16px;

    > div {
      &:first-child {
        min-width: 60%;
      }
      &:last-child {
        flex: 1;
      }
    }
  }
`;

const VideoSection = ({ videos, onVideoSelect, selectedVideo }) => {
  return (

    <StyledVideoSection>
      
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </StyledVideoSection>
  );
};

export default VideoSection;
