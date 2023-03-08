import styled from "styled-components";

interface HeadMarStyledProps {
  backgroundImage: string;
}

const MediaimageStyled = styled.div<HeadMarStyledProps>`
  background: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
`;

export default MediaimageStyled;
