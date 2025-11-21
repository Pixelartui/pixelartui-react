import Styled from "styled-components";

export const StyledPixelSolid = Styled.div<{
    $height?: string;
    $width?: string;
    $backgroundColor?: string;
}>`
   background: ${(props) =>
       props.$backgroundColor
           ? props.$backgroundColor
           : props.theme.general.color.primary};
   width: ${(props) => props.$width};
   height: ${(props) => props.$height};
`;
