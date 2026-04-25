import Styled from "styled-components";
import { TooltipPosition } from "./types";

export const StyledTooltipWrapper = Styled.div`
    position: relative;
    display: inline-flex;
`;

const getTooltipPosition = (position: TooltipPosition) => {
    switch (position) {
        case "top":
            return `
                bottom: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%);
            `;
        case "bottom":
            return `
                top: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%);
            `;
        case "left":
            return `
                right: calc(100% + 8px);
                top: 50%;
                transform: translateY(-50%);
            `;
        case "right":
            return `
                left: calc(100% + 8px);
                top: 50%;
                transform: translateY(-50%);
            `;
    }
};

const getArrowPosition = (position: TooltipPosition) => {
    switch (position) {
        case "top":
            return `
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid currentColor;
            `;
        case "bottom":
            return `
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 4px solid currentColor;
            `;
        case "left":
            return `
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-top: 4px solid transparent;
                border-bottom: 4px solid transparent;
                border-left: 4px solid currentColor;
            `;
        case "right":
            return `
                right: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-top: 4px solid transparent;
                border-bottom: 4px solid transparent;
                border-right: 4px solid currentColor;
            `;
    }
};

export const StyledTooltipContent = Styled.div<{
    $position: TooltipPosition;
    $backgroundColor?: string;
}>`
    position: absolute;
    ${(props) => getTooltipPosition(props.$position)};
    padding: 8px 12px;
    background-color: ${(props) => props.$backgroundColor || props.theme.general.color.primary};
    color: ${(props) => props.theme.general.color.fontLight};
    font-size: 14px;
    border: 2px solid ${(props) => props.theme.general.color.black};
    image-rendering: pixelated;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 1000;
    box-shadow: 2px 2px 0 0 ${(props) => props.theme.general.color.black}40;

    ${StyledTooltipWrapper}:hover &,
    ${StyledTooltipWrapper}:focus-within & {
        opacity: 1;
        visibility: visible;
    }

    &::after {
        content: '';
        position: absolute;
        ${(props) => getArrowPosition(props.$position)};
        width: 0;
        height: 0;
        color: ${(props) => props.$backgroundColor || props.theme.general.color.primary};
    }
`;
