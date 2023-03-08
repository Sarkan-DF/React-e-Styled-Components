import styled from "styled-components";

interface CardsStyledProps {
    backgroundColor?: string;
}

const CardsItensStyled = styled.div<CardsStyledProps>`
  display: flex;
  align-items: center;
  padding: 0px 100px;
  color: black;
  height: 250px;
  background-color:${(props) => props.backgroundColor || "white"};
`;

export default CardsItensStyled;
