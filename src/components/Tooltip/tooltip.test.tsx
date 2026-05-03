import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Tooltip } from ".";
import { TooltipProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: Omit<TooltipProps, "children"> = {
    text: "This is a tooltip",
    position: "top",
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Tooltip component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(
            <Tooltip {...props}>
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipComponent = getByTestId("qa-tooltip");
        expect(tooltipComponent).toBeInTheDocument();
    });

    it("renders children correctly", () => {
        const { getByText } = renderWithTheme(
            <Tooltip {...props}>
                <button>Hover me</button>
            </Tooltip>
        );
        const childElement = getByText("Hover me");
        expect(childElement).toBeInTheDocument();
    });

    it("renders tooltip text", () => {
        const { getByText } = renderWithTheme(
            <Tooltip {...props}>
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipText = getByText(props.text);
        expect(tooltipText).toBeInTheDocument();
    });

    it("renders with top position", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props} position="top">
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(".cp-tooltip-content");
        expect(tooltipContent).toBeInTheDocument();
    });

    it("renders with bottom position", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props} position="bottom">
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(".cp-tooltip-content");
        expect(tooltipContent).toBeInTheDocument();
    });

    it("renders with left position", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props} position="left">
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(".cp-tooltip-content");
        expect(tooltipContent).toBeInTheDocument();
    });

    it("renders with right position", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props} position="right">
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(".cp-tooltip-content");
        expect(tooltipContent).toBeInTheDocument();
    });

    it("renders with dark style", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props} tooltipStyle="dark">
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(".cp-tooltip-content");
        expect(tooltipContent).toBeInTheDocument();
    });

    it("renders with light style", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props} tooltipStyle="light">
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(".cp-tooltip-content");
        expect(tooltipContent).toBeInTheDocument();
    });

    it("renders with custom className", () => {
        const customClass = "custom-tooltip";
        const { getByTestId } = renderWithTheme(
            <Tooltip {...props} className={customClass}>
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipComponent = getByTestId("qa-tooltip");
        expect(tooltipComponent.classList.contains(customClass)).toBe(true);
    });

    it("tooltip content has correct initial styling", () => {
        const { container } = renderWithTheme(
            <Tooltip {...props}>
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(
            ".cp-tooltip-content"
        ) as HTMLElement;

        expect(tooltipContent).toBeInTheDocument();
        expect(tooltipContent).toHaveStyle({ opacity: "0" });
        expect(tooltipContent).toHaveStyle({ visibility: "hidden" });
    });

    it("renders with custom background color", () => {
        const customColor = "#ff5733";
        const { container } = renderWithTheme(
            <Tooltip {...props} backgroundColor={customColor}>
                <button>Hover me</button>
            </Tooltip>
        );
        const tooltipContent = container.querySelector(
            ".cp-tooltip-content"
        ) as HTMLElement;
        const computedStyle = window.getComputedStyle(tooltipContent);
        expect(computedStyle.backgroundColor).toBe("rgb(255, 87, 51)");
    });
});
