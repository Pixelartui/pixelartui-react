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
import { getContrastColor } from "../../Theme/helper";

export const Switch: React.FC<SwitchProps> = ({
    name,
    label,
    type,
    defaultChecked,
    noLabel,
    backgroundColor,
    switchStyle = "dark",
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
                width={theme.switch.size.free?.width}
                type={switchStyle}
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
                        checked={isOn}
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
                        {...(isOn
                            ? {
                                  buttonStyle:
                                      getContrastColor(
                                          backgroundColor
                                              ? backgroundColor
                                              : theme.general.color.primary,
                                          "white",
                                          "black"
                                      ) === "white"
                                          ? "light"
                                          : "dark",
                              }
                            : {
                                  buttonStyle: "dark",
                              })}
                    ></Button>
                </StyledSwitchWrapper>
            </StyledPixelBox>
        </StyledSwitchContainer>
    );
};
