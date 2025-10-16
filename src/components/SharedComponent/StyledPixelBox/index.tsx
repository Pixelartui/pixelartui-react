import React from 'react';
import { StyledPixelBoxProps } from './types';
import { StyledPixelBoxContentInner, StyledPixelBoxContentOuter, StyledPixelBoxSideFirst, StyledPixelBoxSideSecond, StyledPixelBoxSideSecondInnerLeft, StyledPixelBoxSideSecondInnerRight, StyledPixelBoxSideWrapper, StyledPixelBoxWrapper } from './styled';

export const StyledPixelBox: React.FC<StyledPixelBoxProps> = ({
    children,
    error,
    backgroundColor,
    type,
    disabled,
    ...props
}) => {
    return (
        <StyledPixelBoxWrapper className='cp-pixel-box-wrapper'>
            <StyledPixelBoxSideWrapper className='cp-pixel-box-side-wrapper'>
                <StyledPixelBoxSideFirst className='cp-pixel-box-side-first'/>
                <StyledPixelBoxSideSecond className='cp-pixel-box-side-second'>
                    <StyledPixelBoxSideSecondInnerLeft 
                        $error={error} 
                        $type={type} 
                        $backgroundColor={backgroundColor} 
                        $disabled={disabled}
                        className='cp-pixel-box-side-second-inner-left'
                    />
                </StyledPixelBoxSideSecond>
            </StyledPixelBoxSideWrapper>
            <StyledPixelBoxContentOuter className='cp-pixel-box-outer'>
                <StyledPixelBoxContentInner 
                    className='cp-pixel-box-content-inner' 
                    $backgroundColor={backgroundColor}
                    $error={error}
                    $disabled={disabled}
                    {...props}
                >
                    {children}
                </StyledPixelBoxContentInner>
            </StyledPixelBoxContentOuter>
            <StyledPixelBoxSideWrapper className='cp-pixel-box-side-wrapper'>
                <StyledPixelBoxSideSecond className='cp-pixel-box-side-second'>
                    <StyledPixelBoxSideSecondInnerRight 
                        $error={error} 
                        $type={type} 
                        $backgroundColor={backgroundColor} 
                        $disabled={disabled}
                        className='cp-text-input-side-second-inner-left'
                    />
                </StyledPixelBoxSideSecond>
                <StyledPixelBoxSideFirst className='cp-pixel-box-side-first'/>
            </StyledPixelBoxSideWrapper>
        </StyledPixelBoxWrapper>
    );
};