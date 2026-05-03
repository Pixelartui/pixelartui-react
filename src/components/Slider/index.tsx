import React, { useState } from "react";
import { SliderProps } from "./types";
import {
    StyledSliderContainer,
    StyledSliderWrapper,
    StyledSliderTrack,
    StyledSliderFill,
    StyledSliderInput,
    StyledSliderThumb,
    StyledSliderValue,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";
import { theme } from "../../Theme";

export const Slider: React.FC<SliderProps> = ({
    name,
    label,
    type,
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    value,
    noLabel,
    showValue = true,
    backgroundColor,
    sliderStyle = "dark",
    disabled = false,
    onChange,
    className,
    ...props
}) => {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const isControlled = value !== undefined;
    const displayValue = isControlled ? value : currentValue;

    const fillPercentage = ((displayValue - min) / (max - min)) * 100;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (!isControlled) {
            setCurrentValue(newValue);
        }
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <StyledSliderContainer
            $type={type}
            testId="qa-slider"
            className={`cp-slider-container ${className || ""}`}
            {...props}
        >
            {!noLabel && (
                <StyledLabel name={name} text={label} style={sliderStyle} />
            )}
            <StyledSliderWrapper
                $disabled={disabled}
                className="cp-slider-wrapper"
            >
                <StyledSliderTrack
                    className="cp-slider-track"
                    $backgroundColor={
                        disabled
                            ? theme.general.color.disabled
                            : backgroundColor
                    }
                >
                    <StyledSliderFill
                        className="cp-slider-fill"
                        $fillPercentage={fillPercentage}
                        $backgroundColor={
                            disabled
                                ? theme.general.color.disabled
                                : backgroundColor
                        }
                    />
                    <StyledSliderThumb
                        className="cp-slider-thumb"
                        $position={fillPercentage}
                        $backgroundColor={
                            disabled
                                ? theme.general.color.disabled
                                : backgroundColor
                        }
                    />
                </StyledSliderTrack>
                <StyledSliderInput
                    className="cp-slider-input"
                    type="range"
                    name={name}
                    id={`cp-slider-${name}`}
                    min={min}
                    max={max}
                    step={step}
                    value={displayValue}
                    onChange={!disabled ? handleOnChange : undefined}
                    disabled={disabled}
                />
                {showValue && (
                    <StyledSliderValue className="cp-slider-value">
                        {displayValue}
                    </StyledSliderValue>
                )}
            </StyledSliderWrapper>
        </StyledSliderContainer>
    );
};
