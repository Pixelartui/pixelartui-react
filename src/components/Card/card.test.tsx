import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from ".";
import { CardProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: CardProps = {
    children: <p>Card content</p>,
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Card component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Card {...props} />);
        expect(getByTestId("qa-card")).toBeInTheDocument();
    });

    it("renders children content", () => {
        const { getByText } = renderWithTheme(<Card {...props} />);
        expect(getByText("Card content")).toBeInTheDocument();
    });

    it("renders title when provided", () => {
        const { getByText } = renderWithTheme(
            <Card {...props} title="Card Title" />
        );
        expect(getByText("Card Title")).toBeInTheDocument();
    });

    it("does not render header when title is not provided", () => {
        const { container } = renderWithTheme(<Card {...props} />);
        const header = container.querySelector(".cp-card-header");
        expect(header).not.toBeInTheDocument();
    });

    it("renders footer when provided", () => {
        const { getByText } = renderWithTheme(
            <Card {...props} footer={<span>Footer text</span>} />
        );
        expect(getByText("Footer text")).toBeInTheDocument();
    });

    it("does not render footer when not provided", () => {
        const { container } = renderWithTheme(<Card {...props} />);
        const footer = container.querySelector(".cp-card-footer");
        expect(footer).not.toBeInTheDocument();
    });

    it("renders with custom className", () => {
        const customClass = "custom-card";
        const { getByTestId } = renderWithTheme(
            <Card {...props} className={customClass} />
        );
        expect(
            getByTestId("qa-card").classList.contains(customClass)
        ).toBe(true);
    });

    it("renders body section", () => {
        const { container } = renderWithTheme(<Card {...props} />);
        const body = container.querySelector(".cp-card-body");
        expect(body).toBeInTheDocument();
    });

    it("renders with title, body, and footer together", () => {
        const { getByText } = renderWithTheme(
            <Card title="Title" footer={<span>Footer</span>}>
                <p>Body</p>
            </Card>
        );
        expect(getByText("Title")).toBeInTheDocument();
        expect(getByText("Body")).toBeInTheDocument();
        expect(getByText("Footer")).toBeInTheDocument();
    });

    it("renders custom footer elements", () => {
        const { getByText } = renderWithTheme(
            <Card {...props} footer={<button>Action</button>} />
        );
        expect(getByText("Action")).toBeInTheDocument();
    });
});
