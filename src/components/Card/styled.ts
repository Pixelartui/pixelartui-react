import Styled from "styled-components";

export const StyledCardContainer = Styled.div<{
    $backgroundColor?: string;
}>`
    display: flex;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.general.color.dark};
    background-color: ${(props) =>
        props.$backgroundColor || props.theme.general.color.white};
    image-rendering: pixelated;
    font-family: 'Pixelify Sans', cursive;
    overflow: hidden;
`;

export const StyledCardHeader = Styled.div`
    padding: 12px 16px;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.general.color.font};
    border-bottom: 2px solid ${(props) => props.theme.general.color.dark};
`;

export const StyledCardBody = Styled.div`
    padding: 16px;
    flex: 1;
    color: ${(props) => props.theme.general.color.font};
`;

export const StyledCardFooter = Styled.div`
    padding: 12px 16px;
    border-top: 2px solid ${(props) => props.theme.general.color.dark};
    color: ${(props) => props.theme.general.color.font};
`;
