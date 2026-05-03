import React from "react";
import { BreadcrumbProps } from "./types";
import {
    StyledBreadcrumbContainer,
    StyledBreadcrumbItem,
    StyledBreadcrumbLink,
    StyledBreadcrumbButton,
    StyledBreadcrumbSeparator,
} from "./styled";
import { StyledContainer } from "../SharedComponent/StyledContainer";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator = ">",
    className,
    ...props
}) => {
    return (
        <StyledContainer
            testId="qa-breadcrumb"
            className={`cp-breadcrumb ${className || ""}`}
        >
        <StyledBreadcrumbContainer
            aria-label="Breadcrumb"
            {...props}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <React.Fragment key={index}>
                        <StyledBreadcrumbItem
                            $isLast={isLast}
                            className="cp-breadcrumb-item"
                        >
                            {isLast ? (
                                <span aria-current="page">{item.label}</span>
                            ) : item.href ? (
                                <StyledBreadcrumbLink href={item.href}>
                                    {item.label}
                                </StyledBreadcrumbLink>
                            ) : item.onClick ? (
                                <StyledBreadcrumbButton
                                    onClick={item.onClick}
                                    type="button"
                                >
                                    {item.label}
                                </StyledBreadcrumbButton>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </StyledBreadcrumbItem>
                        {!isLast && (
                            <StyledBreadcrumbSeparator
                                className="cp-breadcrumb-separator"
                                aria-hidden="true"
                            >
                                {separator}
                            </StyledBreadcrumbSeparator>
                        )}
                    </React.Fragment>
                );
            })}
        </StyledBreadcrumbContainer>
        </StyledContainer>
    );
};
