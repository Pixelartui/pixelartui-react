import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Alert } from ".";
import { AlertProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: AlertProps = {
    message: "This is an alert message",
    variant: "info",
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Alert component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Alert {...props} />);
        const alertComponent = getByTestId("qa-alert");
        expect(alertComponent).toBeInTheDocument();
    });

    it("renders alert message", () => {
        const { getByText } = renderWithTheme(<Alert {...props} />);
        expect(getByText(props.message)).toBeInTheDocument();
    });

    it("renders title when provided", () => {
        const { getByText } = renderWithTheme(
            <Alert {...props} title="Alert Title" />
        );
        expect(getByText("Alert Title")).toBeInTheDocument();
    });

    it("does not render title when not provided", () => {
        const { container } = renderWithTheme(<Alert {...props} />);
        const title = container.querySelector(".cp-alert-title");
        expect(title).not.toBeInTheDocument();
    });

    it("renders with success variant", () => {
        const { getByTestId } = renderWithTheme(
            <Alert {...props} variant="success" />
        );
        expect(getByTestId("qa-alert")).toBeInTheDocument();
    });

    it("renders with error variant", () => {
        const { getByTestId } = renderWithTheme(
            <Alert {...props} variant="error" />
        );
        expect(getByTestId("qa-alert")).toBeInTheDocument();
    });

    it("renders with warning variant", () => {
        const { getByTestId } = renderWithTheme(
            <Alert {...props} variant="warning" />
        );
        expect(getByTestId("qa-alert")).toBeInTheDocument();
    });

    it("renders dismiss button when dismissible", () => {
        const { getByLabelText } = renderWithTheme(
            <Alert {...props} dismissible />
        );
        expect(getByLabelText("Dismiss alert")).toBeInTheDocument();
    });

    it("does not render dismiss button when not dismissible", () => {
        const { queryByLabelText } = renderWithTheme(<Alert {...props} />);
        expect(queryByLabelText("Dismiss alert")).not.toBeInTheDocument();
    });

    it("calls onDismiss when dismiss button is clicked", () => {
        const onDismissMock = jest.fn();
        const { getByLabelText } = renderWithTheme(
            <Alert {...props} dismissible onDismiss={onDismissMock} />
        );
        fireEvent.click(getByLabelText("Dismiss alert"));
        expect(onDismissMock).toHaveBeenCalledTimes(1);
    });

    it("renders with role=alert", () => {
        const { getByRole } = renderWithTheme(<Alert {...props} />);
        expect(getByRole("alert")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
        const customClass = "custom-alert";
        const { getByTestId } = renderWithTheme(
            <Alert {...props} className={customClass} />
        );
        expect(getByTestId("qa-alert").classList.contains(customClass)).toBe(
            true
        );
    });
});
