import React from 'react';

export const Page: React.FC<PageProps> = ({ title, children }) => {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
        
    );
};