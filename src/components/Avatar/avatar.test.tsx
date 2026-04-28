import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Avatar } from ".";
import { AvatarProps } from "./types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

const props: AvatarProps = {};

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Avatar component", () => {
    it("renders correctly", () => {
        const { getByTestId } = renderWithTheme(<Avatar {...props} />);
        expect(getByTestId("qa-avatar")).toBeInTheDocument();
    });

    it("renders with role=img", () => {
        const { getByTestId } = renderWithTheme(<Avatar {...props} />);
        expect(getByTestId("qa-avatar").getAttribute("role")).toBe("img");
    });

    it("renders image when src is provided", () => {
        const { container } = renderWithTheme(
            <Avatar src="avatar.png" alt="User avatar" />
        );
        const img = container.querySelector(".cp-avatar-image");
        expect(img).toBeInTheDocument();
        expect(img?.getAttribute("src")).toBe("avatar.png");
        expect(img?.getAttribute("alt")).toBe("User avatar");
    });

    it("renders initials when no src is provided", () => {
        const { getByText } = renderWithTheme(
            <Avatar initials="AB" />
        );
        expect(getByText("AB")).toBeInTheDocument();
    });

    it("renders fallback when neither src nor initials provided", () => {
        const { getByText } = renderWithTheme(<Avatar />);
        expect(getByText("?")).toBeInTheDocument();
    });

    it("does not render image when no src provided", () => {
        const { container } = renderWithTheme(
            <Avatar initials="AB" />
        );
        const img = container.querySelector(".cp-avatar-image");
        expect(img).not.toBeInTheDocument();
    });

    it("does not render initials when src is provided", () => {
        const { container } = renderWithTheme(
            <Avatar src="avatar.png" initials="AB" />
        );
        const initials = container.querySelector(".cp-avatar-initials");
        expect(initials).not.toBeInTheDocument();
    });

    it("renders with custom className", () => {
        const customClass = "custom-avatar";
        const { getByTestId } = renderWithTheme(
            <Avatar className={customClass} />
        );
        expect(
            getByTestId("qa-avatar").classList.contains(customClass)
        ).toBe(true);
    });

    it("uses alt as aria-label when provided", () => {
        const { getByTestId } = renderWithTheme(
            <Avatar alt="Profile picture" />
        );
        expect(getByTestId("qa-avatar").getAttribute("aria-label")).toBe(
            "Profile picture"
        );
    });

    it("uses initials as aria-label when no alt provided", () => {
        const { getByTestId } = renderWithTheme(
            <Avatar initials="JD" />
        );
        expect(getByTestId("qa-avatar").getAttribute("aria-label")).toBe(
            "JD"
        );
    });

    it("uses default aria-label when no alt or initials provided", () => {
        const { getByTestId } = renderWithTheme(<Avatar />);
        expect(getByTestId("qa-avatar").getAttribute("aria-label")).toBe(
            "Avatar"
        );
    });
});
