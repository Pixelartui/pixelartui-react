import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from ".";
import { CheckboxProps } from "./types";
import { find } from "styled-components/test-utils";
import { StyledCheckbox } from "./styled";

const props: CheckboxProps = {
    name: "test-checkbox",
    label: "I agree",
    type: "main",
    onChange: jest.fn(),
};

describe("Checkbox component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Checkbox {...props} />);
        const checkboxComponent = getByTestId("qa-checkbox");
        expect(checkboxComponent).toBeInTheDocument();
    });

    it("renders correct name and id", () => {
        const { getByTestId } = render(<Checkbox {...props} />);
        const checkboxComponent = getByTestId("qa-checkbox");
        const component = find(checkboxComponent, StyledCheckbox);
        expect(component!.getAttribute("name")).toBe(props.name);
        expect(component!.getAttribute("id")).toBe(`cp-checkbox-${props.name}`);
    });

    it("renders correct label", () => {
        const { getByText } = render(<Checkbox {...props} />);
        const label = getByText(props.label!);
        expect(label).toBeInTheDocument();
    });

    it("will not render label if noLabel is true", () => {
        const newProps = {
            ...props,
            noLabel: true,
        };

        const { queryByLabelText } = render(<Checkbox {...newProps} />);
        const label = queryByLabelText(newProps.label!);

        expect(label).not.toBeInTheDocument();
    });

    it("renders checked state when defaultChecked is true", () => {
        const newProps = {
            ...props,
            defaultChecked: true,
        };
        const { getByTestId } = render(<Checkbox {...newProps} />);
        const checkboxComponent = getByTestId("qa-checkbox");
        const component = find(checkboxComponent, StyledCheckbox);
        expect(component!).toBeChecked();
    });

    it("invokes the correct function when changed", () => {
        const { getByTestId } = render(<Checkbox {...props} />);

        const checkboxContainer = getByTestId("qa-checkbox");
        const checkboxComponent = find(checkboxContainer, StyledCheckbox);
        fireEvent.click(checkboxComponent!);

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it("renders disabled state correctly", () => {
        const newProps = {
            ...props,
            disabled: true,
        };
        const { getByTestId } = render(<Checkbox {...newProps} />);

        const checkboxContainer = getByTestId("qa-checkbox");
        const checkboxComponent = find(checkboxContainer, StyledCheckbox);

        expect(checkboxComponent!).toBeDisabled();
    });

    it("toggles checked state on click", () => {
        const { getByTestId } = render(<Checkbox {...props} />);

        const checkboxContainer = getByTestId("qa-checkbox");
        const checkboxComponent = find(checkboxContainer, StyledCheckbox);

        expect(checkboxComponent!).not.toBeChecked();

        fireEvent.click(checkboxComponent!);
        expect(checkboxComponent!).toBeChecked();

        fireEvent.click(checkboxComponent!);
        expect(checkboxComponent!).not.toBeChecked();
    });
});
