import Styled from "styled-components";

export const StyledBreadcrumbContainer = Styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Pixelify Sans', cursive;
    font-size: 16px;
`;

export const StyledBreadcrumbItem = Styled.span<{
    $isLast?: boolean;
}>`
    color: ${(props) =>
        props.$isLast
            ? props.theme.general.color.font
            : props.theme.general.color.primary};
    font-weight: ${(props) => (props.$isLast ? "bold" : "normal")};
`;

export const StyledBreadcrumbLink = Styled.a`
    color: ${(props) => props.theme.general.color.primary};
    text-decoration: none;
    cursor: pointer;
    image-rendering: pixelated;

    &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.general.color.secondary};
    }
`;

export const StyledBreadcrumbButton = Styled.button`
    background: none;
    border: none;
    padding: 0;
    font-family: 'Pixelify Sans', cursive;
    font-size: 16px;
    color: ${(props) => props.theme.general.color.primary};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.general.color.secondary};
    }
`;

export const StyledBreadcrumbSeparator = Styled.span`
    color: ${(props) => props.theme.general.color.font};
    user-select: none;
`;
