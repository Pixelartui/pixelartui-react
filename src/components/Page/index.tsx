import React from 'react';
import { StyledPageContainer } from './styled';

export const Page: React.FC<PageProps> = ({ title, children }) => {
    return (
        <StyledPageContainer $backgroundColor='#000000'>
            <h1>{title}</h1>
            {children}
        </StyledPageContainer>
    );
};