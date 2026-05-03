import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Accordion } from ".";
import { AccordionProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const items = [
    { title: "Section 1", content: <p>Content 1</p> },
    { title: "Section 2", content: <p>Content 2</p> },
    { title: "Section 3", content: <p>Content 3</p>, disabled: true },
];

const props: AccordionProps = {
    items,
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Accordion component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Accordion {...props} />);
        expect(getByTestId("qa-accordion")).toBeInTheDocument();
    });

    it("renders all item titles", () => {
        const { getByText } = renderWithTheme(<Accordion {...props} />);
        expect(getByText("Section 1")).toBeInTheDocument();
        expect(getByText("Section 2")).toBeInTheDocument();
        expect(getByText("Section 3")).toBeInTheDocument();
    });

    it("panels are closed by default", () => {
        const { container } = renderWithTheme(<Accordion {...props} />);
        const panels = container.querySelectorAll(".cp-accordion-panel");
        panels.forEach((panel) => {
            expect(panel).not.toBeVisible();
        });
    });

    it("opens panel on header click", () => {
        const { getByText, container } = renderWithTheme(
            <Accordion {...props} />
        );
        fireEvent.click(getByText("Section 1"));
        const panels = container.querySelectorAll(".cp-accordion-panel");
        expect(panels[0]).toBeVisible();
    });

    it("closes open panel on second click", () => {
        const { getByText, container } = renderWithTheme(
            <Accordion {...props} />
        );
        fireEvent.click(getByText("Section 1"));
        fireEvent.click(getByText("Section 1"));
        const panels = container.querySelectorAll(".cp-accordion-panel");
        expect(panels[0]).not.toBeVisible();
    });

    it("closes previous panel when opening another in single mode", () => {
        const { getByText, container } = renderWithTheme(
            <Accordion {...props} />
        );
        fireEvent.click(getByText("Section 1"));
        fireEvent.click(getByText("Section 2"));
        const panels = container.querySelectorAll(".cp-accordion-panel");
        expect(panels[0]).not.toBeVisible();
        expect(panels[1]).toBeVisible();
    });

    it("allows multiple panels open when allowMultiple is true", () => {
        const { getByText, container } = renderWithTheme(
            <Accordion {...props} allowMultiple />
        );
        fireEvent.click(getByText("Section 1"));
        fireEvent.click(getByText("Section 2"));
        const panels = container.querySelectorAll(".cp-accordion-panel");
        expect(panels[0]).toBeVisible();
        expect(panels[1]).toBeVisible();
    });

    it("does not open disabled item", () => {
        const { getByText, container } = renderWithTheme(
            <Accordion {...props} />
        );
        fireEvent.click(getByText("Section 3"));
        const panels = container.querySelectorAll(".cp-accordion-panel");
        expect(panels[2]).not.toBeVisible();
    });

    it("renders with defaultOpenIndexes", () => {
        const { container } = renderWithTheme(
            <Accordion {...props} defaultOpenIndexes={[0]} />
        );
        const panels = container.querySelectorAll(".cp-accordion-panel");
        expect(panels[0]).toBeVisible();
        expect(panels[1]).not.toBeVisible();
    });

    it("calls onChange when toggling", () => {
        const onChangeMock = jest.fn();
        const { getByText } = renderWithTheme(
            <Accordion {...props} onChange={onChangeMock} />
        );
        fireEvent.click(getByText("Section 1"));
        expect(onChangeMock).toHaveBeenCalledWith([0]);
    });

    it("sets aria-expanded correctly", () => {
        const { getByText } = renderWithTheme(<Accordion {...props} />);
        const header = getByText("Section 1");
        expect(header.getAttribute("aria-expanded")).toBe("false");
        fireEvent.click(header);
        expect(header.getAttribute("aria-expanded")).toBe("true");
    });

    it("sets aria-disabled on disabled items", () => {
        const { getByText } = renderWithTheme(<Accordion {...props} />);
        expect(getByText("Section 3").getAttribute("aria-disabled")).toBe(
            "true"
        );
    });

    it("renders with custom className", () => {
        const customClass = "custom-accordion";
        const { getByTestId } = renderWithTheme(
            <Accordion {...props} className={customClass} />
        );
        expect(
            getByTestId("qa-accordion").classList.contains(customClass)
        ).toBe(true);
    });

    it("renders panels with role=region", () => {
        const { container } = renderWithTheme(<Accordion {...props} />);
        const regions = container.querySelectorAll('[role="region"]');
        expect(regions.length).toBe(items.length);
    });
});
