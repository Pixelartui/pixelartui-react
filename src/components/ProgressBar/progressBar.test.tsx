import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ProgressBar } from ".";
import { ProgressBarProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: ProgressBarProps = {
    value: 50,
};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("ProgressBar component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<ProgressBar {...props} />);
        const progressBar = getByTestId("qa-progress-bar");
        expect(progressBar).toBeInTheDocument();
    });

    it("renders with role=progressbar", () => {
        const { getByRole } = renderWithTheme(<ProgressBar {...props} />);
        expect(getByRole("progressbar")).toBeInTheDocument();
    });

    it("sets correct aria-valuenow", () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar {...props} value={75} />
        );
        expect(getByRole("progressbar").getAttribute("aria-valuenow")).toBe(
            "75"
        );
    });

    it("sets correct aria-valuemin and aria-valuemax", () => {
        const { getByRole } = renderWithTheme(<ProgressBar {...props} />);
        const progressbar = getByRole("progressbar");
        expect(progressbar.getAttribute("aria-valuemin")).toBe("0");
        expect(progressbar.getAttribute("aria-valuemax")).toBe("100");
    });

    it("renders label when provided", () => {
        const { getByText } = renderWithTheme(
            <ProgressBar {...props} label="Upload Progress" />
        );
        expect(getByText("Upload Progress")).toBeInTheDocument();
    });

    it("does not render label when not provided", () => {
        const { container } = renderWithTheme(<ProgressBar {...props} />);
        const label = container.querySelector(".cp-progress-bar-label");
        expect(label).not.toBeInTheDocument();
    });

    it("renders value percentage when showValue is true", () => {
        const { getByText } = renderWithTheme(
            <ProgressBar {...props} showValue />
        );
        expect(getByText("50%")).toBeInTheDocument();
    });

    it("does not render value when showValue is false", () => {
        const { container } = renderWithTheme(<ProgressBar {...props} />);
        const value = container.querySelector(".cp-progress-bar-value");
        expect(value).not.toBeInTheDocument();
    });

    it("clamps value to 0 when negative", () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar {...props} value={-10} />
        );
        expect(getByRole("progressbar").getAttribute("aria-valuenow")).toBe(
            "0"
        );
    });

    it("clamps value to max when exceeding max", () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar {...props} value={150} max={100} />
        );
        expect(getByRole("progressbar").getAttribute("aria-valuenow")).toBe(
            "100"
        );
    });

    it("supports custom max value", () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar {...props} value={5} max={10} />
        );
        const progressbar = getByRole("progressbar");
        expect(progressbar.getAttribute("aria-valuemax")).toBe("10");
        expect(progressbar.getAttribute("aria-valuenow")).toBe("5");
    });

    it("renders with custom className", () => {
        const customClass = "custom-progress";
        const { getByTestId } = renderWithTheme(
            <ProgressBar {...props} className={customClass} />
        );
        expect(
            getByTestId("qa-progress-bar").classList.contains(customClass)
        ).toBe(true);
    });

    it("uses label as aria-label when provided", () => {
        const { getByRole } = renderWithTheme(
            <ProgressBar {...props} label="Download" />
        );
        expect(getByRole("progressbar").getAttribute("aria-label")).toBe(
            "Download"
        );
    });

    it("uses default aria-label when no label provided", () => {
        const { getByRole } = renderWithTheme(<ProgressBar {...props} />);
        expect(getByRole("progressbar").getAttribute("aria-label")).toBe(
            "Progress"
        );
    });
});
