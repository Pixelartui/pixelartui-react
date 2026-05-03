import React, { useState } from "react";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { CheckboxProps } from "./types";
import {
    StyledCheckbox,
    StyledCheckboxContainer,
    StyledCheckboxWrapper,
    StyledCheckmark,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";
import { theme } from "../../Theme";

export const Checkbox: React.FC<CheckboxProps> = ({
    name,
    label,
    type,
    defaultChecked = false,
    noLabel,
    backgroundColor,
    checkboxStyle = "dark",
    disabled = false,
    onChange,
    className,
    ...props
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked((prev) => !prev);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <StyledCheckboxContainer
            $type={type}
            testId="qa-checkbox"
            className={`cp-checkbox-container ${className || ""}`}
            {...props}
        >
            {!noLabel && (
                <StyledLabel name={name} text={label} style={checkboxStyle} />
            )}
            <StyledCheckboxWrapper
                $isChecked={isChecked}
                $backgroundColor={backgroundColor}
                $disabled={disabled}
                className="cp-checkbox-wrapper"
            >
                <StyledPixelBox
                    className="cp-checkbox-box"
                    width="24px"
                    height="24px"
                    style={checkboxStyle}
                    backgroundColor={
                        disabled
                            ? theme.general.color.disabled
                            : backgroundColor
                              ? backgroundColor
                              : isChecked
                                ? theme.general.color.white
                                : theme.general.color.white
                    }
                >
                    <StyledCheckmark
                        $isChecked={isChecked}
                        $backgroundColor={backgroundColor}
                        className="cp-checkmark"
                    />
                </StyledPixelBox>
                <StyledCheckbox
                    className="cp-checkbox-input"
                    name={name}
                    id={`cp-checkbox-${name}`}
                    type="checkbox"
                    onChange={!disabled ? handleOnChange : undefined}
                    checked={isChecked}
                    disabled={disabled}
                />
            </StyledCheckboxWrapper>
        </StyledCheckboxContainer>
    );
};
