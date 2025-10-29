import Styled from "styled-components";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { SwitchType } from "./types";

export const StyledSwitchContainer = Styled(StyledContainer)<{
    $type?: SwitchType;
}>`
    flex-direction: ${(props) => (props.$type === "main" ? "column" : "row")};
`;
export const StyledSwitchWrapper = Styled.div<{
    $isOn?: boolean;
    $backgroundColor?: string;
}>`
    display: flex;
    position: relative;
    width: 55px;
    background: ${(props) =>
        props.$isOn
            ? props.$backgroundColor
                ? props.$backgroundColor
                : props.theme.general.color.primary
            : props.theme.general.color.disabled};

    .cp-button-text-container {
        min-width: 10px;
        height: 23px;
    }

    .cp-switch-input-check:checked ~ .cp-button-container {
      margin-left: 27px;
    }
    
    
`;

export const StyledSwitch = Styled.input`
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    margin: 0;
    cursor: pointer;        
`;
