import React from "react";
import { ProgressBarProps } from "./types";
import {
    StyledProgressBarContainer,
    StyledProgressBarLabel,
    StyledProgressBarTrack,
    StyledProgressBarFill,
    StyledProgressBarValue,
} from "./styled";

export const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    max = 100,
    label,
    showValue = false,
    backgroundColor,
    fillColor,
    className,
    ...props
}) => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = (clampedValue / max) * 100;

    return (
        <StyledProgressBarContainer
            data-testid="qa-progress-bar"
            className={`cp-progress-bar ${className || ""}`}
            {...props}
        >
            {label && (
                <StyledProgressBarLabel className="cp-progress-bar-label">
                    {label}
                </StyledProgressBarLabel>
            )}
            <StyledProgressBarTrack
                $backgroundColor={backgroundColor}
                className="cp-progress-bar-track"
                role="progressbar"
                aria-valuenow={clampedValue}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={label || "Progress"}
            >
                <StyledProgressBarFill
                    $percentage={percentage}
                    $fillColor={fillColor}
                    className="cp-progress-bar-fill"
                />
            </StyledProgressBarTrack>
            {showValue && (
                <StyledProgressBarValue className="cp-progress-bar-value">
                    {Math.round(percentage)}%
                </StyledProgressBarValue>
            )}
        </StyledProgressBarContainer>
    );
};
