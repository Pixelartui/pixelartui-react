import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Radio } from ".";
import { RadioProps } from "./types";
import { find } from "styled-components/test-utils";
import { StyledRadio } from "./styled";

const props: RadioProps = {
    name: "test-radio",
    label: "Select option",
    value: "option1",
    type: "main",
    onChange: jest.fn(),
};

describe("Radio component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Radio {...props} />);
        const radioComponent = getByTestId("qa-radio");
        expect(radioComponent).toBeInTheDocument();
    });

    it("renders correct name, id, and value", () => {
        const { getByTestId } = render(<Radio {...props} />);
        const radioComponent = getByTestId("qa-radio");
        const component = find(radioComponent, StyledRadio);
        expect(component!.getAttribute("name")).toBe(props.name);
        expect(component!.getAttribute("id")).toBe(`cp-radio-${props.name}-${props.value}`);
        expect(component!.getAttribute("value")).toBe(props.value);
    });

    it("renders correct label", () => {
        const { getByText } = render(<Radio {...props} />);
        const label = getByText(props.label!);
        expect(label).toBeInTheDocument();
    });

    it("will not render label if noLabel is true", () => {
        const newProps = {
            ...props,
            noLabel: true,
        };

        const { queryByLabelText } = render(<Radio {...newProps} />);
        const label = queryByLabelText(newProps.label!);

        expect(label).not.toBeInTheDocument();
    });

    it("renders checked state when defaultChecked is true", () => {
        const newProps = {
            ...props,
            defaultChecked: true,
        };
        const { getByTestId } = render(<Radio {...newProps} />);
        const radioComponent = getByTestId("qa-radio");
        const component = find(radioComponent, StyledRadio);
        expect(component!).toBeChecked();
    });

    it("invokes the correct function when changed", () => {
        const { getByTestId } = render(<Radio {...props} />);

        const radioContainer = getByTestId("qa-radio");
        const radioComponent = find(radioContainer, StyledRadio);
        fireEvent.click(radioComponent!);

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it("renders disabled state correctly", () => {
        const newProps = {
            ...props,
            disabled: true,
        };
        const { getByTestId } = render(<Radio {...newProps} />);

        const radioContainer = getByTestId("qa-radio");
        const radioComponent = find(radioContainer, StyledRadio);

        expect(radioComponent!).toBeDisabled();
    });

    it("handles controlled component with checked prop", () => {
        const { getByTestId } = render(<Radio {...props} checked={true} />);

        const radioContainer = getByTestId("qa-radio");
        const radioComponent = find(radioContainer, StyledRadio);

        expect(radioComponent!).toBeChecked();
    });
});
