import Styled from 'styled-components';

export const StyledPageContainer = Styled.div<{ $backgroundColor?: string }>`
    background-color: ${props => props.$backgroundColor};
`;
