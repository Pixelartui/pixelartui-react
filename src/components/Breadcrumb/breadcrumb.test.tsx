import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Breadcrumb } from ".";
import { BreadcrumbProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Current Page" },
];

const props: BreadcrumbProps = {
    items,
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Breadcrumb component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Breadcrumb {...props} />);
        const breadcrumbComponent = getByTestId("qa-breadcrumb");
        expect(breadcrumbComponent).toBeInTheDocument();
    });

    it("renders all breadcrumb items", () => {
        const { getByText } = renderWithTheme(<Breadcrumb {...props} />);
        items.forEach((item) => {
            expect(getByText(item.label)).toBeInTheDocument();
        });
    });

    it("renders links for non-last items with href", () => {
        const { getByText } = renderWithTheme(<Breadcrumb {...props} />);
        const homeLink = getByText("Home").closest("a");
        expect(homeLink).toHaveAttribute("href", "/");
    });

    it("renders last item without a link", () => {
        const { getByText } = renderWithTheme(<Breadcrumb {...props} />);
        const lastItem = getByText("Current Page");
        expect(lastItem.closest("a")).toBeNull();
    });

    it("renders default separator", () => {
        const { container } = renderWithTheme(<Breadcrumb {...props} />);
        const separators = container.querySelectorAll(
            ".cp-breadcrumb-separator"
        );
        expect(separators.length).toBe(items.length - 1);
        expect(separators[0].textContent).toBe(">");
    });

    it("renders custom separator", () => {
        const { container } = renderWithTheme(
            <Breadcrumb {...props} separator="/" />
        );
        const separators = container.querySelectorAll(
            ".cp-breadcrumb-separator"
        );
        expect(separators[0].textContent).toBe("/");
    });

    it("renders aria-label on nav element", () => {
        const { getByTestId } = renderWithTheme(<Breadcrumb {...props} />);
        const nav = getByTestId("qa-breadcrumb");
        expect(nav.getAttribute("aria-label")).toBe("Breadcrumb");
    });

    it("renders aria-current on last item", () => {
        const { getByText } = renderWithTheme(<Breadcrumb {...props} />);
        const lastItem = getByText("Current Page");
        expect(lastItem.getAttribute("aria-current")).toBe("page");
    });

    it("renders separators with aria-hidden", () => {
        const { container } = renderWithTheme(<Breadcrumb {...props} />);
        const separators = container.querySelectorAll(
            ".cp-breadcrumb-separator"
        );
        separators.forEach((separator) => {
            expect(separator.getAttribute("aria-hidden")).toBe("true");
        });
    });

    it("renders with custom className", () => {
        const customClass = "custom-breadcrumb";
        const { getByTestId } = renderWithTheme(
            <Breadcrumb {...props} className={customClass} />
        );
        const breadcrumbComponent = getByTestId("qa-breadcrumb");
        expect(breadcrumbComponent.classList.contains(customClass)).toBe(true);
    });

    it("renders button for items with onClick", () => {
        const onClickMock = jest.fn();
        const itemsWithClick = [
            { label: "Home", onClick: onClickMock },
            { label: "Current Page" },
        ];
        const { getByText } = renderWithTheme(
            <Breadcrumb items={itemsWithClick} />
        );
        const button = getByText("Home");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
