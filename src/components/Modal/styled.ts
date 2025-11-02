import Styled from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { getContrastColor } from "../../Theme/helper";
import { Button } from "../Button";

export const StyledBackdrop = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1c29246e;
`;

export const StyledCloseButton = Styled(Button)`
    position: absolute;
    right: 8px;
    top: 8px;

     .cp-button-text-container {
        background: black;
        min-width: 20px;
    }
`;
export const StyledModalContainer = Styled(StyledContainer)`
    .cp-pixel-box-content-inner {
        min-width: 400px;
        height: 400px;
    }
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
            props.theme.general.color.fontContrast,
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
