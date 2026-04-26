import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { DropdownMenu } from ".";
import { DropdownMenuProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const items = [
    { label: "Edit", value: "edit" },
    { label: "Delete", value: "delete" },
    { label: "Archive", value: "archive", disabled: true },
];

const props: DropdownMenuProps = {
    items,
    trigger: <button>Menu</button>,
    onSelect: jest.fn(),
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("DropdownMenu component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<DropdownMenu {...props} />);
        const dropdownComponent = getByTestId("qa-dropdown-menu");
        expect(dropdownComponent).toBeInTheDocument();
    });

    it("renders trigger element", () => {
        const { getByText } = renderWithTheme(<DropdownMenu {...props} />);
        expect(getByText("Menu")).toBeInTheDocument();
    });

    it("menu is closed by default", () => {
        const { container } = renderWithTheme(<DropdownMenu {...props} />);
        const list = container.querySelector(".cp-dropdown-list");
        expect(list).toHaveStyle({ display: "none" });
    });

    it("opens menu on trigger click", () => {
        const { getByText, container } = renderWithTheme(
            <DropdownMenu {...props} />
        );
        fireEvent.click(getByText("Menu"));
        const list = container.querySelector(".cp-dropdown-list");
        expect(list).toHaveStyle({ display: "block" });
    });

    it("closes menu on second trigger click", () => {
        const { getByText, container } = renderWithTheme(
            <DropdownMenu {...props} />
        );
        fireEvent.click(getByText("Menu"));
        fireEvent.click(getByText("Menu"));
        const list = container.querySelector(".cp-dropdown-list");
        expect(list).toHaveStyle({ display: "none" });
    });

    it("renders all menu items", () => {
        const { getByText } = renderWithTheme(<DropdownMenu {...props} />);
        fireEvent.click(getByText("Menu"));
        items.forEach((item) => {
            expect(getByText(item.label)).toBeInTheDocument();
        });
    });

    it("calls onSelect when item is clicked", () => {
        const onSelectMock = jest.fn();
        const { getByText } = renderWithTheme(
            <DropdownMenu {...props} onSelect={onSelectMock} />
        );
        fireEvent.click(getByText("Menu"));
        fireEvent.click(getByText("Edit"));
        expect(onSelectMock).toHaveBeenCalledWith("edit");
    });

    it("closes menu after item selection", () => {
        const { getByText, container } = renderWithTheme(
            <DropdownMenu {...props} />
        );
        fireEvent.click(getByText("Menu"));
        fireEvent.click(getByText("Edit"));
        const list = container.querySelector(".cp-dropdown-list");
        expect(list).toHaveStyle({ display: "none" });
    });

    it("does not call onSelect for disabled items", () => {
        const onSelectMock = jest.fn();
        const { getByText } = renderWithTheme(
            <DropdownMenu {...props} onSelect={onSelectMock} />
        );
        fireEvent.click(getByText("Menu"));
        fireEvent.click(getByText("Archive"));
        expect(onSelectMock).not.toHaveBeenCalled();
    });

    it("renders correct aria attributes on trigger", () => {
        const { container } = renderWithTheme(<DropdownMenu {...props} />);
        const trigger = container.querySelector(".cp-dropdown-trigger");
        expect(trigger!.getAttribute("role")).toBe("button");
        expect(trigger!.getAttribute("aria-haspopup")).toBe("true");
        expect(trigger!.getAttribute("aria-expanded")).toBe("false");
    });

    it("updates aria-expanded when menu opens", () => {
        const { getByText, container } = renderWithTheme(
            <DropdownMenu {...props} />
        );
        fireEvent.click(getByText("Menu"));
        const trigger = container.querySelector(".cp-dropdown-trigger");
        expect(trigger!.getAttribute("aria-expanded")).toBe("true");
    });

    it("renders menu role on list", () => {
        const { container } = renderWithTheme(<DropdownMenu {...props} />);
        const list = container.querySelector('[role="menu"]');
        expect(list).toBeInTheDocument();
    });

    it("renders menuitem role on items", () => {
        const { container, getByText } = renderWithTheme(
            <DropdownMenu {...props} />
        );
        fireEvent.click(getByText("Menu"));
        const menuItems = container.querySelectorAll('[role="menuitem"]');
        expect(menuItems.length).toBe(items.length);
    });

    it("closes menu on outside click", () => {
        const { getByText, container } = renderWithTheme(
            <DropdownMenu {...props} />
        );
        fireEvent.click(getByText("Menu"));
        fireEvent.mouseDown(document.body);
        const list = container.querySelector(".cp-dropdown-list");
        expect(list).toHaveStyle({ display: "none" });
    });

    it("renders with custom className", () => {
        const customClass = "custom-dropdown";
        const { getByTestId } = renderWithTheme(
            <DropdownMenu {...props} className={customClass} />
        );
        const dropdownComponent = getByTestId("qa-dropdown-menu");
        expect(dropdownComponent.classList.contains(customClass)).toBe(true);
    });
});
