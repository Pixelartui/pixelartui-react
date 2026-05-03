import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Tabs } from ".";
import { TabsProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const tabs = [
    { label: "Tab 1", content: <div>Content 1</div> },
    { label: "Tab 2", content: <div>Content 2</div> },
    { label: "Tab 3", content: <div>Content 3</div>, disabled: true },
];

const props: TabsProps = {
    tabs,
    onChange: jest.fn(),
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Tabs component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Tabs {...props} />);
        const tabsComponent = getByTestId("qa-tabs");
        expect(tabsComponent).toBeInTheDocument();
    });

    it("renders all tab labels", () => {
        const { getByText } = renderWithTheme(<Tabs {...props} />);
        tabs.forEach((tab) => {
            expect(getByText(tab.label)).toBeInTheDocument();
        });
    });

    it("renders first tab content by default", () => {
        const { getByText } = renderWithTheme(<Tabs {...props} />);
        expect(getByText("Content 1")).toBeInTheDocument();
    });

    it("renders correct default active tab content", () => {
        const { getByText } = renderWithTheme(
            <Tabs {...props} defaultActiveIndex={1} />
        );
        expect(getByText("Content 2")).toBeInTheDocument();
    });

    it("switches tab content on click", () => {
        const { getByText } = renderWithTheme(<Tabs {...props} />);
        fireEvent.click(getByText("Tab 2"));
        expect(getByText("Content 2")).toBeInTheDocument();
    });

    it("calls onChange when tab is clicked", () => {
        const onChangeMock = jest.fn();
        const { getByText } = renderWithTheme(
            <Tabs {...props} onChange={onChangeMock} />
        );
        fireEvent.click(getByText("Tab 2"));
        expect(onChangeMock).toHaveBeenCalledWith(1);
    });

    it("does not switch to disabled tab", () => {
        const onChangeMock = jest.fn();
        const { getByText } = renderWithTheme(
            <Tabs {...props} onChange={onChangeMock} />
        );
        fireEvent.click(getByText("Tab 3"));
        expect(onChangeMock).not.toHaveBeenCalled();
        expect(getByText("Content 1")).toBeInTheDocument();
    });

    it("renders disabled tab with disabled attribute", () => {
        const { getByText } = renderWithTheme(<Tabs {...props} />);
        const disabledTab = getByText("Tab 3");
        expect(disabledTab).toBeDisabled();
    });

    it("renders with custom className", () => {
        const customClass = "custom-tabs";
        const { getByTestId } = renderWithTheme(
            <Tabs {...props} className={customClass} />
        );
        const tabsComponent = getByTestId("qa-tabs");
        expect(tabsComponent.classList.contains(customClass)).toBe(true);
    });

    it("renders correct aria attributes", () => {
        const { getByText } = renderWithTheme(<Tabs {...props} />);
        const firstTab = getByText("Tab 1");
        expect(firstTab.getAttribute("role")).toBe("tab");
        expect(firstTab.getAttribute("aria-selected")).toBe("true");
    });

    it("works as controlled component", () => {
        const { getByText, rerender } = renderWithTheme(
            <Tabs {...props} activeIndex={0} />
        );
        expect(getByText("Content 1")).toBeInTheDocument();

        rerender(
            <ThemeProvider theme={theme}>
                <Tabs {...props} activeIndex={1} />
            </ThemeProvider>
        );
        expect(getByText("Content 2")).toBeInTheDocument();
    });

    it("renders tablist role on tab list", () => {
        const { container } = renderWithTheme(<Tabs {...props} />);
        const tabList = container.querySelector('[role="tablist"]');
        expect(tabList).toBeInTheDocument();
    });

    it("renders tabpanel role on content area", () => {
        const { container } = renderWithTheme(<Tabs {...props} />);
        const tabPanel = container.querySelector('[role="tabpanel"]');
        expect(tabPanel).toBeInTheDocument();
    });
});
