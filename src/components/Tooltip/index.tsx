import React from "react";
import { TooltipProps } from "./types";
import { StyledTooltipWrapper, StyledTooltipContent } from "./styled";
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
        <StyledTooltipWrapper
            className={`cp-tooltip ${className || ""}`}
            data-testid="qa-tooltip"
            {...props}
        >
            {children}
            <StyledTooltipContent
                className="cp-tooltip-content"
                $position={position}
                $backgroundColor={getBackgroundColor()}
            >
                {text}
            </StyledTooltipContent>
        </StyledTooltipWrapper>
    );
};
