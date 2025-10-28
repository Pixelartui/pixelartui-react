import Styled from "styled-components";

export const StyledTextInputLabel = Styled.label<{
    $text?: string;
}>`
    display: flex;
    align-items: center;
    padding: 5px;
`;
