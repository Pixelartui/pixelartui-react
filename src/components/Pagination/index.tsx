import React, { useState, useMemo } from "react";
import { PaginationProps } from "./types";
import {
    StyledPaginationContainer,
    StyledPageButtonBox,
    StyledPageButtonContent,
    StyledEllipsis,
} from "./styled";
import { StyledContainer } from "../SharedComponent/StyledContainer";

const getPageRange = (
    currentPage: number,
    totalPages: number,
    siblingCount: number
): (number | "ellipsis")[] => {
    const totalNumbers = siblingCount * 2 + 5;

    if (totalNumbers >= totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from(
            { length: leftItemCount },
            (_, i) => i + 1
        );
        return [...leftRange, "ellipsis", totalPages];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from(
            { length: rightItemCount },
            (_, i) => totalPages - rightItemCount + i + 1
        );
        return [1, "ellipsis", ...rightRange];
    }

    const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
    );
    return [1, "ellipsis", ...middleRange, "ellipsis", totalPages];
};

export const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    defaultPage = 1,
    siblingCount = 1,
    paginationStyle = "dark",
    backgroundColor,
    className,
    onChange,
    ...props
}) => {
    const [page, setPage] = useState(defaultPage);

    const isControlled = currentPage !== undefined;
    const activePage = isControlled ? currentPage : page;

    const pages = useMemo(
        () => getPageRange(activePage, totalPages, siblingCount),
        [activePage, totalPages, siblingCount]
    );

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        if (!isControlled) {
            setPage(newPage);
        }
        if (onChange) {
            onChange(newPage);
        }
    };

    return (
        <StyledContainer testId="qa-pagination" className={`cp-pagination ${className || ""}`}>
            <StyledPaginationContainer
                aria-label="Pagination"
                {...props}
            >
                <StyledPageButtonBox
                    className="cp-pagination-prev"
                    style={paginationStyle}
                    backgroundColor={backgroundColor}
                >
                    <StyledPageButtonContent
                        onClick={() => handlePageChange(activePage - 1)}
                        disabled={activePage === 1}
                        aria-label="Previous page"
                    >
                        &lt;
                    </StyledPageButtonContent>
                </StyledPageButtonBox>
                {pages.map((item, index) =>
                    item === "ellipsis" ? (
                        <StyledEllipsis
                            key={`ellipsis-${index}`}
                            className="cp-pagination-ellipsis"
                        >
                            ...
                        </StyledEllipsis>
                    ) : (
                        <StyledPageButtonBox
                            key={item}
                            className="cp-pagination-page"
                            $isActive={activePage === item}
                            $backgroundColor={backgroundColor}
                            style={paginationStyle}
                            backgroundColor={
                                activePage === item
                                    ? backgroundColor
                                    : undefined
                            }
                        >
                            <StyledPageButtonContent
                                $isActive={activePage === item}
                                $backgroundColor={backgroundColor}
                                onClick={() => handlePageChange(item)}
                                aria-current={
                                    activePage === item ? "page" : undefined
                                }
                                aria-label={`Page ${item}`}
                            >
                                {item}
                            </StyledPageButtonContent>
                        </StyledPageButtonBox>
                    )
                )}
                <StyledPageButtonBox
                    className="cp-pagination-next"
                    style={paginationStyle}
                    backgroundColor={backgroundColor}
                >
                    <StyledPageButtonContent
                        onClick={() => handlePageChange(activePage + 1)}
                        disabled={activePage === totalPages}
                        aria-label="Next page"
                    >
                        &gt;
                    </StyledPageButtonContent>
                </StyledPageButtonBox>
            </StyledPaginationContainer>
        </StyledContainer>
    );
};
