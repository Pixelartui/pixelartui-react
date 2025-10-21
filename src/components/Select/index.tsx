import React, { useState, useRef } from 'react';
import { SelectProps } from './types';
import { StyledPixelBox } from '../SharedComponent/StyledPixelBox';
import { StyledOptionsWrapper, StyledSelectContainer, StyledSelectDisplayText, StyledSelectIconContainer, StyledSelectIconPixel, StyledSelectIconRow, StyledSelectLabel, StyledSelectOption, StyledSelectWrapper, StyleSelectDisplay, StyleSelectDropdown } from './styled';
import { useClickOutsideCompnent } from '../../hooks';

const SelectIcon = ({
    open,
}: {
    open: boolean;
}) => {
    return (
        <StyledSelectIconContainer $open={open}>
            <StyledSelectIconRow>
                <StyledSelectIconPixel></StyledSelectIconPixel>
                <StyledSelectIconPixel></StyledSelectIconPixel>
                <StyledSelectIconPixel></StyledSelectIconPixel>
            </StyledSelectIconRow>
            <StyledSelectIconRow>
                <StyledSelectIconPixel></StyledSelectIconPixel>
                <StyledSelectIconPixel></StyledSelectIconPixel>
            </StyledSelectIconRow>
            <StyledSelectIconRow>
                <StyledSelectIconPixel></StyledSelectIconPixel>
            </StyledSelectIconRow>

        </StyledSelectIconContainer>
    );
}

export const Select: React.FC<SelectProps> = ({
    backgroundColor,
    options,
    display,
    selectName,
    selectLabel,
    noLabel,
    type,
    disabled,
    error,
    onChange,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectDisplay, setSelectDisplay] = useState(display);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const toggleDropDown = () => {
        if (disabled) return;
        setOpenDropdown(prev => !prev);
    }
    useClickOutsideCompnent(ref, () => {setOpenDropdown(false)});

    const onOptionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const el = event.currentTarget;
        const value = el.dataset.value;
        const display = el.innerHTML

        if (value) {
            setSelectedOption(value);
            setSelectDisplay(display);

            if (onChange) {
                onChange(event);
            }
        }
    };

    return (
        <StyledSelectContainer 
            $type={type} 
            ref={ref}
            $disabled={disabled}
            testId="qa-select"
        >
            {!noLabel && <StyledSelectLabel 
                $type={type}
                className="cp-text-input-label"
                htmlFor={selectName}
            >{ selectLabel }</StyledSelectLabel>}
            <StyledSelectWrapper  id={`cp-select-${selectName}`} className='cp-select-wrapper' onClick={toggleDropDown}>
                <StyleSelectDisplay 
                    className="cp-select-display"
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                >
                    <StyledPixelBox backgroundColor={backgroundColor} disabled={disabled} error={error}>
                        <StyledSelectDisplayText
                            className='cp-select-display-text'
                        >{selectDisplay}</StyledSelectDisplayText>
                        <SelectIcon open={openDropdown} />
                    </StyledPixelBox>
                    
                </StyleSelectDisplay>
                
                <StyleSelectDropdown 
                    className="cp-select-dropdown" 
                    $open={openDropdown}
                    $backgroundColor={backgroundColor}
                    $disabled={disabled}
                >
                    <StyledPixelBox backgroundColor={backgroundColor} disabled={disabled}>
                        <StyledOptionsWrapper className='cp-select-options-wrapper'>
                            {options.map(option => <StyledSelectOption
                                className='cp-select-option'
                                key={option.value} 
                                data-value={option.value}
                                $backgroundColor={backgroundColor}
                                $selectedOption={selectedOption}
                                $value={option.value}
                                $disabled={disabled}
                                onClick={onOptionClick}
                            >{option.label}</StyledSelectOption>)}
                        </StyledOptionsWrapper>
                    </StyledPixelBox>
                </StyleSelectDropdown>
            </StyledSelectWrapper>
        </StyledSelectContainer>            
    );
};