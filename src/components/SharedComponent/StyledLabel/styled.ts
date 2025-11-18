import Styled from "styled-components";
import { StyledLabelStyle } from "./types";

export const StyledTextInputLabel = Styled.label<{
    $text?: string;
    $style?: StyledLabelStyle;
}>`
    display: flex;
    align-items: center;
    padding: 5px;
    color: ${(props) =>
        props.$style === "dark"
            ? props.theme.general.color.font
            : props.theme.general.color.fontLight}
`;
