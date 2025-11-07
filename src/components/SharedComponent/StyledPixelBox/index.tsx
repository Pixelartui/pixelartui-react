import React from "react";
import { StyledPixelBoxProps } from "./types";
import {
    StyledPixelBoxContentInner,
    StyledPixelBoxContentOuter,
    StyledPixelBoxSideFirst,
    StyledPixelBoxSideRoundFirst,
    StyledPixelBoxSideRoundSecond,
    StyledPixelBoxSideRoundThird,
    StyledPixelBoxSideRoundThirdInnerLeft,
    StyledPixelBoxSideRoundThirdInnerRight,
    StyledPixelBoxSideSecond,
    StyledPixelBoxSideSecondInnerLeft,
    StyledPixelBoxSideSecondInnerRight,
    StyledPixelBoxSideWrapper,
    StyledPixelBoxWrapper,
} from "./styled";

export const StyledPixelBox: React.FC<StyledPixelBoxProps> = ({
    children,
    error,
    backgroundColor,
    type,
    disabled,
    round,
    minHeight,
    minWidth,
    width,
    height,
    fullwidth,
    ...props
}) => {
    return (
        <StyledPixelBoxWrapper
            $minHeight={minHeight}
            $minWidth={minWidth}
            $height={height}
            $width={width}
            $fullwidth={fullwidth}
            className="cp-pixel-box-wrapper"
            {...props}
        >
            <StyledPixelBoxSideWrapper className="cp-pixel-box-side-wrapper">
                {round ? (
                    <>
                        <StyledPixelBoxSideRoundFirst className="cp-pixel-box-side-roundfirst" />
                        <StyledPixelBoxSideRoundSecond className="cp-pixel-box-side-round-second">
                            <StyledPixelBoxSideSecondInnerLeft
                                $error={error}
                                $type={type}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                                className="cp-pixel-box-side-second-inner-left"
                            />
                        </StyledPixelBoxSideRoundSecond>
                        <StyledPixelBoxSideRoundThird className="cp-pixel-box-side-round-third">
                            <StyledPixelBoxSideRoundThirdInnerLeft
                                $error={error}
                                $type={type}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                                className="cp-pixel-box-side-second-inner-left"
                            />
                        </StyledPixelBoxSideRoundThird>
                    </>
                ) : (
                    <>
                        <StyledPixelBoxSideFirst className="cp-pixel-box-side-first" />
                        <StyledPixelBoxSideSecond className="cp-pixel-box-side-second">
                            <StyledPixelBoxSideSecondInnerLeft
                                $error={error}
                                $type={type}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                                className="cp-pixel-box-side-second-inner-left"
                            />
                        </StyledPixelBoxSideSecond>
                    </>
                )}
            </StyledPixelBoxSideWrapper>
            <StyledPixelBoxContentOuter className="cp-pixel-box-outer">
                <StyledPixelBoxContentInner
                    className="cp-pixel-box-content-inner"
                    $backgroundColor={backgroundColor}
                    $error={error}
                    $disabled={disabled}
                    {...props}
                >
                    {children}
                </StyledPixelBoxContentInner>
            </StyledPixelBoxContentOuter>
            <StyledPixelBoxSideWrapper className="cp-pixel-box-side-wrapper">
                {round ? (
                    <>
                        <StyledPixelBoxSideRoundThird className="cp-pixel-box-side-round-third">
                            <StyledPixelBoxSideRoundThirdInnerRight
                                $error={error}
                                $type={type}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                                className="cp-text-input-side-second-inner-left"
                            />
                        </StyledPixelBoxSideRoundThird>
                        <StyledPixelBoxSideRoundSecond className="cp-pixel-box-side-round-second">
                            <StyledPixelBoxSideSecondInnerRight
                                $error={error}
                                $type={type}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                                className="cp-text-input-side-second-inner-left"
                            />
                        </StyledPixelBoxSideRoundSecond>
                        <StyledPixelBoxSideRoundFirst className="cp-pixel-box-side-roundfirst" />
                    </>
                ) : (
                    <>
                        <StyledPixelBoxSideSecond className="cp-pixel-box-side-second">
                            <StyledPixelBoxSideSecondInnerRight
                                $error={error}
                                $type={type}
                                $backgroundColor={backgroundColor}
                                $disabled={disabled}
                                className="cp-text-input-side-second-inner-left"
                            />
                        </StyledPixelBoxSideSecond>
                        <StyledPixelBoxSideFirst className="cp-pixel-box-side-first" />
                    </>
                )}
            </StyledPixelBoxSideWrapper>
        </StyledPixelBoxWrapper>
    );
};
