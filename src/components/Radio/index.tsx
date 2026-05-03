import React, { useState } from "react";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { RadioProps } from "./types";
import {
    StyledRadio,
    StyledRadioContainer,
    StyledRadioWrapper,
    StyledRadioDot,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";
import { theme } from "../../Theme";

export const Radio: React.FC<RadioProps> = ({
    name,
    label,
    value,
    type,
    defaultChecked = false,
    checked,
    noLabel,
    backgroundColor,
    radioStyle = "dark",
    disabled = false,
    onChange,
    className,
    ...props
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const isControlled = checked !== undefined;
    const checkedValue = isControlled ? checked : isChecked;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setIsChecked(event.target.checked);
        }
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <StyledRadioContainer
            $type={type}
            testId="qa-radio"
            className={`cp-radio-container ${className || ""}`}
            {...props}
        >
            {!noLabel && (
                <StyledLabel name={name} text={label} style={radioStyle} />
            )}
            <StyledRadioWrapper
                $isChecked={checkedValue}
                $backgroundColor={backgroundColor}
                $disabled={disabled}
                className="cp-radio-wrapper"
            >
                <StyledPixelBox
                    className="cp-radio-box"
                    width="24px"
                    height="24px"
                    style={radioStyle}
                    backgroundColor={
                        disabled
                            ? theme.general.color.disabled
                            : backgroundColor
                              ? backgroundColor
                              : checkedValue
                                ? theme.general.color.white
                                : theme.general.color.white
                    }
                >
                    <StyledRadioDot
                        $isChecked={checkedValue}
                        $backgroundColor={backgroundColor}
                        className="cp-radio-dot"
                    />
                </StyledPixelBox>
                <StyledRadio
                    className="cp-radio-input"
                    name={name}
                    id={`cp-radio-${name}-${value}`}
                    type="radio"
                    value={value}
                    onChange={!disabled ? handleOnChange : undefined}
                    checked={checkedValue}
                    disabled={disabled}
                />
            </StyledRadioWrapper>
        </StyledRadioContainer>
    );
};
