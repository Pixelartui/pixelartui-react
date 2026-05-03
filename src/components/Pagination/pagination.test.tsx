import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Pagination } from ".";
import { PaginationProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: PaginationProps = {
    totalPages: 10,
    defaultPage: 1,
    onChange: jest.fn(),
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Pagination component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Pagination {...props} />);
        const paginationComponent = getByTestId("qa-pagination");
        expect(paginationComponent).toBeInTheDocument();
    });

    it("renders previous and next buttons", () => {
        const { getByLabelText } = renderWithTheme(<Pagination {...props} />);
        expect(getByLabelText("Previous page")).toBeInTheDocument();
        expect(getByLabelText("Next page")).toBeInTheDocument();
    });

    it("disables previous button on first page", () => {
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} defaultPage={1} />
        );
        expect(getByLabelText("Previous page")).toBeDisabled();
    });

    it("disables next button on last page", () => {
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} defaultPage={10} />
        );
        expect(getByLabelText("Next page")).toBeDisabled();
    });

    it("calls onChange when page is clicked", () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} onChange={onChangeMock} />
        );
        fireEvent.click(getByLabelText("Page 3"));
        expect(onChangeMock).toHaveBeenCalledWith(3);
    });

    it("calls onChange when next button is clicked", () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} onChange={onChangeMock} />
        );
        fireEvent.click(getByLabelText("Next page"));
        expect(onChangeMock).toHaveBeenCalledWith(2);
    });

    it("calls onChange when previous button is clicked", () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} defaultPage={5} onChange={onChangeMock} />
        );
        fireEvent.click(getByLabelText("Previous page"));
        expect(onChangeMock).toHaveBeenCalledWith(4);
    });

    it("renders aria-current on active page", () => {
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} defaultPage={3} />
        );
        const activePage = getByLabelText("Page 3");
        expect(activePage.getAttribute("aria-current")).toBe("page");
    });

    it("renders aria-label on nav element", () => {
        const { getByLabelText } = renderWithTheme(
            <Pagination {...props} />
        );
        expect(getByLabelText("Pagination")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
        const customClass = "custom-pagination";
        const { getByTestId } = renderWithTheme(
            <Pagination {...props} className={customClass} />
        );
        const paginationComponent = getByTestId("qa-pagination");
        expect(paginationComponent.classList.contains(customClass)).toBe(true);
    });

    it("renders ellipsis for large page counts", () => {
        const { container } = renderWithTheme(
            <Pagination {...props} totalPages={20} defaultPage={10} />
        );
        const ellipses = container.querySelectorAll(
            ".cp-pagination-ellipsis"
        );
        expect(ellipses.length).toBeGreaterThan(0);
    });

    it("renders all pages when total is small", () => {
        const { container } = renderWithTheme(
            <Pagination totalPages={3} defaultPage={1} />
        );
        const pageButtons = container.querySelectorAll(
            ".cp-pagination-page"
        );
        expect(pageButtons.length).toBe(3);
    });

    it("works as controlled component", () => {
        const { getByLabelText, rerender } = renderWithTheme(
            <Pagination {...props} currentPage={1} />
        );
        expect(getByLabelText("Page 1").getAttribute("aria-current")).toBe(
            "page"
        );

        rerender(
            <ThemeProvider theme={theme}>
                <Pagination {...props} currentPage={5} />
            </ThemeProvider>
        );
        expect(getByLabelText("Page 5").getAttribute("aria-current")).toBe(
            "page"
        );
    });
});
