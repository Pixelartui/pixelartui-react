import React from "react";
import { ThemeProvider } from "styled-components";
import { StyledContainerProps } from "./types";
import { GlobalStyle, theme } from "../../../Theme";
import { StyledComponentContainer } from "./styled";

export const StyledContainer: React.FC<StyledContainerProps> = ({
    children,
    testId,
    ref,
    onClick,
    fullwidth,
    ...props
}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledComponentContainer
                onClick={onClick}
                ref={ref}
                data-testid={testId}
                className="cp-container"
                $fullwidth={fullwidth}
                {...props}
            >
                {children}
            </StyledComponentContainer>
        </ThemeProvider>
    );
};
