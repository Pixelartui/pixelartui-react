import Styled from "styled-components";
import { StyledHelperTextStyle } from "./types";

export const StyledHelperTextWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const StyledHelperTextContent = Styled.div<{
    $error?: boolean;
    $style?: StyledHelperTextStyle;
}>`
    display: flex;
    font-size: 12px;
    color: ${(props) =>
        props.$style === "dark"
            ? props.$error
                ? "#ff6060"
                : props.theme.general.color.font
            : props.$error
            ? "red"
            : props.theme.general.color.fontLight};
`;
