import Styled from "styled-components";

export const StyledComponentContainer = Styled.div<{
    $fullwidth?: boolean;
}>`
    font-family: 'Pixelify Sans';
    display: flex;
    width: ${(props) => (props.$fullwidth ? "100%" : "max-content")};
`;
