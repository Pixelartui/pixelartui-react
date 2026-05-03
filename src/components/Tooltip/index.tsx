import React from "react";
import { TooltipProps } from "./types";
import { StyledTooltipWrapper, StyledTooltipContent } from "./styled";
import { StyledContainer } from "../SharedComponent/StyledContainer";
import { theme } from "../../Theme";

export const Tooltip: React.FC<TooltipProps> = ({
    text,
    position = "top",
    tooltipStyle = "dark",
    backgroundColor,
    className,
    children,
    ...props
}) => {
    const getBackgroundColor = () => {
        if (backgroundColor) {
            return backgroundColor;
        }
        return tooltipStyle === "dark"
            ? theme.general.color.dark
            : theme.general.color.primary;
    };

    return (
        <StyledContainer
            testId="qa-tooltip"
            className={`cp-tooltip ${className || ""}`}
        >
            <StyledTooltipWrapper {...props}>
                {children}
                <StyledTooltipContent
                    className="cp-tooltip-content"
                    $position={position}
                    $backgroundColor={getBackgroundColor()}
                >
                    {text}
                </StyledTooltipContent>
            </StyledTooltipWrapper>
        </StyledContainer>
    );
};
