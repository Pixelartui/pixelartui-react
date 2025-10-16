import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StyledContainerProps } from './types';
import { GlobalStyle, theme } from '../../../Theme';
import { StyledComponentContainer } from './styled';

export const StyledContainer: React.FC<StyledContainerProps> = ({
    children,
    testId,
    ref,
    ...props
}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledComponentContainer ref={ref} data-testid={testId} className='cp-container' {...props} >
                {children}
            </StyledComponentContainer>
        </ThemeProvider>
    );
};