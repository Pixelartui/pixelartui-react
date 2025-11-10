import React, { useState } from "react";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import { SwitchProps } from "./types";
import {
    StyledSwitch,
    StyledSwitchContainer,
    StyledSwitchWrapper,
} from "./styled";
import { StyledLabel } from "../SharedComponent/StyledLabel";
import { Button } from "../Button";
import { theme } from "../../Theme";

export const Switch: React.FC<SwitchProps> = ({
    name,
    label,
    type,
    defaultChecked,
    noLabel,
    backgroundColor,
    checked,
    onChange,
    ...props
}) => {
    const [isOn, setIsOn] = useState(defaultChecked);
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsOn((prev) => !prev);
        if (onChange) {
            onChange(event);
        }
    };
    return (
        <StyledSwitchContainer
            $type={type}
            testId="qa-switch"
            className="cp-swicth-container"
            {...props}
        >
            {!noLabel && <StyledLabel name={name} text={label} />}
            <StyledPixelBox
                {...(isOn
                    ? {
                          backgroundColor: backgroundColor
                              ? backgroundColor
                              : undefined,
                      }
                    : {
                          backgroundColor: theme.general.color.disabled,
                      })}
            >
                <StyledSwitchWrapper
                    $backgroundColor={backgroundColor}
                    $isOn={isOn}
                    className="cp-switch-wrapper"
                >
                    <StyledSwitch
                        className="cp-switch-input-check"
                        name={name}
                        id={`cp-switch-${name}`}
                        type="checkbox"
                        onChange={handleOnChange}
                        checked={checked}
                    />

                    <Button
                        buttonSize="small"
                        buttonType="main"
                        text=""
                        onClick={() => {}}
                        width="26px"
                        height="26px"
                        {...(isOn
                            ? {
                                  backgroundColor: backgroundColor
                                      ? backgroundColor
                                      : undefined,
                              }
                            : {
                                  backgroundColor: theme.general.color.disabled,
                              })}
                    ></Button>
                </StyledSwitchWrapper>
            </StyledPixelBox>
        </StyledSwitchContainer>
    );
};
