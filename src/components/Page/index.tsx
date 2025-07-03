import React from 'react';
import { StyledPageContainer } from './styled';

export const Page: React.FC<PageProps> = ({ title, children, backgroundColor }) => {
    return (
        <StyledPageContainer $backgroundColor={backgroundColor}>
            <h1>{title}</h1>
            {children}
        </StyledPageContainer>
    );
};