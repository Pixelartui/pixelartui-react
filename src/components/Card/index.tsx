import React from "react";
import { CardProps } from "./types";
import {
    StyledCardContainer,
    StyledCardHeader,
    StyledCardBody,
    StyledCardFooter,
} from "./styled";
import { StyledContainer } from "../SharedComponent/StyledContainer";

export const Card: React.FC<CardProps> = ({
    title,
    children,
    footer,
    backgroundColor,
    className,
    ...props
}) => {
    return (
        <StyledContainer testId="qa-card" className={`cp-card ${className || ""}`}>
            <StyledCardContainer
                $backgroundColor={backgroundColor}
                {...props}
            >
                {title && (
                    <StyledCardHeader className="cp-card-header">
                        {title}
                    </StyledCardHeader>
                )}
                <StyledCardBody className="cp-card-body">
                    {children}
                </StyledCardBody>
                {footer && (
                    <StyledCardFooter className="cp-card-footer">
                        {footer}
                    </StyledCardFooter>
                )}
            </StyledCardContainer>
        </StyledContainer>
    );
};
