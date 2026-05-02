import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Badge } from ".";
import { BadgeProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: BadgeProps = {
    text: "Test Badge",
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Badge component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Badge {...props} />);
        const badgeComponent = getByTestId("qa-badge");
        expect(badgeComponent).toBeInTheDocument();
    });

    it("renders correct text", () => {
        const { getByText } = renderWithTheme(<Badge {...props} />);
        const badgeText = getByText(props.text);
        expect(badgeText).toBeInTheDocument();
    });

    it("renders with default variant and size", () => {
        const { getByTestId } = renderWithTheme(<Badge {...props} />);
        const badgeComponent = getByTestId("qa-badge");
        expect(badgeComponent).toBeInTheDocument();
    });

    it("renders with success variant", () => {
        const newProps = {
            ...props,
            variant: "success" as const,
        };
        const { getByTestId } = renderWithTheme(<Badge {...newProps} />);
        const badgeComponent = getByTestId("qa-badge");
        expect(badgeComponent).toBeInTheDocument();
    });

    it("renders with small size", () => {
        const newProps = {
            ...props,
            size: "small" as const,
        };
        const { getByTestId } = renderWithTheme(<Badge {...newProps} />);
        const badgeComponent = getByTestId("qa-badge");
        expect(badgeComponent).toBeInTheDocument();
    });

    it("renders with large size", () => {
        const newProps = {
            ...props,
            size: "large" as const,
        };
        const { getByTestId } = renderWithTheme(<Badge {...newProps} />);
        const badgeComponent = getByTestId("qa-badge");
        expect(badgeComponent).toBeInTheDocument();
    });

    it("renders dismiss button when dismissible is true", () => {
        const newProps = {
            ...props,
            dismissible: true,
            onDismiss: jest.fn(),
        };
        const { getByLabelText } = renderWithTheme(<Badge {...newProps} />);
        const dismissButton = getByLabelText("Dismiss badge");
        expect(dismissButton).toBeInTheDocument();
    });

    it("does not render dismiss button when dismissible is false", () => {
        const newProps = {
            ...props,
            dismissible: false,
        };
        const { queryByLabelText } = renderWithTheme(<Badge {...newProps} />);
        const dismissButton = queryByLabelText("Dismiss badge");
        expect(dismissButton).not.toBeInTheDocument();
    });

    it("invokes onDismiss callback when dismiss button is clicked", () => {
        const onDismiss = jest.fn();
        const newProps = {
            ...props,
            dismissible: true,
            onDismiss,
        };
        const { getByLabelText } = renderWithTheme(<Badge {...newProps} />);
        const dismissButton = getByLabelText("Dismiss badge");

        fireEvent.click(dismissButton);
        expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("renders with custom className", () => {
        const newProps = {
            ...props,
            className: "custom-badge-class",
        };
        const { getByTestId } = renderWithTheme(<Badge {...newProps} />);
        const badgeComponent = getByTestId("qa-badge");
        expect(badgeComponent).toHaveClass("custom-badge-class");
    });
});
