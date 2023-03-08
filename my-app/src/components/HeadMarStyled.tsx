import styled from "styled-components";
import mar from "../img/mar1.jpg"

interface HeadMarStyledProps {
    height?: string;
}

const HeadMarStyled = styled.div<HeadMarStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${mar});
    background-size: cover;
    height: ${(props) => props.height || "250px"};
    color: white;
`;

export default HeadMarStyled;
