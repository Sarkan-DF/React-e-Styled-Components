import styled from "styled-components";

interface WrapperStyledProps {
  backgroundcolor?: string;
  color?: string;
}

const WrapperStyled = styled.div<WrapperStyledProps>`
  background-color: ${(props) => props.backgroundcolor || "white"};
  color: ${(props) => props.color || "black"};
`;

export default WrapperStyled;