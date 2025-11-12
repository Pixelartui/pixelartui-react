import Styled from "styled-components";
import { getContrastColor } from "../../Theme/helper";
import { Button } from "../Button";
import { StyledPixelBoxType } from "../SharedComponent/StyledPixelBox/types";

export const StyledBackdrop = Styled.div<{
    $modalStyle?: StyledPixelBoxType;
}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
        props.$modalStyle === "dark" ? "#1c29246e" : "#1c2924f2"};
`;

export const StyledCloseButton = Styled(Button)`
    position: absolute;
    right: 25px;
    top: 8px;
`;

export const StyledModalContent = Styled.div<{
    $backgroundColor?: string;
}>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${(props) =>
        props.$backgroundColor
            ? props.$backgroundColor
            : props.theme.general.color.primary};
    color: ${(props) =>
        getContrastColor(
            props.$backgroundColor
                ? props.$backgroundColor
                : props.theme.general.color.primary,
            props.theme.general.color.fontLight,
            props.theme.general.color.font
        )}
`;

export const StyledModalContentHeader = Styled.div`
        display: flex;
        font-size: 24px;
        padding: 10px 50px 10px 10px;
        justify-content: flex-start;
`;

export const StyledModalContentBody = Styled.div`
        flex-grow: 4;
        padding: 10px;
`;
export const StyledModalContentActions = Styled.div`
         display: flex;
         padding: 10px;
         gap: 10px;
         justify-content: flex-end;
`;
