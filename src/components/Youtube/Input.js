import React from "react";
import styled, { css } from "styled-components";

const ImageWrapper = styled.div`
  > div {
    padding-top: 56%;
    position: relative;
  }

  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
`;

const getRatioInPercent = str => {
  const ratio = str.split(":");
  const second = parseInt(ratio[1] || ratio[0]);
  const first = parseInt(ratio[0]);
  return (second / first) * 100;
};

const Image = ({ src, alt, ratio, ...otherProps }) => {
  const ratioInPercent = getRatioInPercent(ratio);
  return (
    <ImageWrapper {...otherProps} ratio={ratioInPercent}>
      <div>
        <img src={src} alt={alt} />
      </div>
    </ImageWrapper>
  );
};

Image.defaultProps = {
  ratio: "16:9"
};

export default Image;
