import styled from "styled-components";

interface ParagraphStyledProps {
    textAlign?: string;
}

const ParagraphStyled = styled.p<ParagraphStyledProps>`
    text-align: ${(props) => (props.textAlign || "justify")};
`;

export default ParagraphStyled;