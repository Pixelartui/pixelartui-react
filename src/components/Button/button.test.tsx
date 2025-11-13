import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { find } from "styled-components/test-utils";
import { Button } from "./index";
import { StyledTextContainerSecondLayer } from "./styled";
import { StyledPixelBoxWrapper } from "../SharedComponent/StyledPixelBox/styled";

const props = {
    text: "Button",
    buttonSize: "medium",
    buttonType: "main",
    onClick: jest.fn(),
};

describe("Button component", () => {
    it("renders correctly", () => {
        const { getByText } = render(
            <Button
                {...{
                    text: "Button",
                    buttonSize: "medium",
                    buttonType: "main",
                    onClick: jest.fn(),
                }}
            />
        );
        const button = getByText(props.text);
        expect(button).toBeInTheDocument();
    });

    it("renders the correct size", () => {
        const { container } = render(
            <Button
                {...{
                    text: "Button",
                    buttonSize: "medium",
                    buttonType: "main",
                    onClick: jest.fn(),
                }}
            />
        );
        const component = find(container, StyledPixelBoxWrapper);
        const styles = getComputedStyle(component!);
        expect(styles.getPropertyValue("height")).toBe("35px");
        expect(styles.getPropertyValue("min-width")).toBe("100px");
    });

    it("renders the correct type", () => {
        const { container } = render(
            <Button
                {...{
                    text: "Button",
                    buttonSize: "medium",
                    buttonType: "outline",
                    onClick: jest.fn(),
                }}
            />
        );
        const component = find(container, StyledTextContainerSecondLayer);
        const styles = getComputedStyle(component!);
        expect(styles.getPropertyValue("background")).toBe(
            "rgba(255, 255, 255, 0)"
        );
    });

    it("renders correctly when disabled", () => {
        const { container } = render(
            <Button
                {...{
                    text: "Button",
                    buttonSize: "medium",
                    buttonType: "main",
                    onClick: jest.fn(),
                    disabled: true,
                }}
            />
        );
        const component = find(container, StyledTextContainerSecondLayer);
        const styles = getComputedStyle(component!);
        expect(styles.getPropertyValue("background")).toBe(
            "rgb(236, 221, 247)"
        );
    });

    it("invoke the correct function when clicked", () => {
        const mockOnclick = jest.fn();
        const { getByText } = render(
            <Button
                {...{
                    text: "Button",
                    buttonSize: "medium",
                    buttonType: "main",
                    onClick: mockOnclick,
                }}
            />
        );
        const button = getByText(props.text);
        fireEvent.click(button);

        expect(mockOnclick).toHaveBeenCalledTimes(1);
    });
});
