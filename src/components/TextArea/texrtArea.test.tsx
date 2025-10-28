import "@testing-library/jest-dom";
import { TextArea } from ".";
import { fireEvent, render } from "@testing-library/react";
import { TextAreaProps } from "./types";
import { find } from "styled-components/test-utils";
import { StyledTextArea } from "./styled";

const props: TextAreaProps = {
    inputName: "test-input",
    label: "The test",
    placeholder: "Placeholder",
    type: "main",
};

describe("Text Area component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<TextArea {...props} />);
        const textArea = getByTestId("qa-text-area");
        expect(textArea).toBeInTheDocument();
    });

    it("renders correct name and id", () => {
        const { getByTestId } = render(<TextArea {...props} />);
        const textInput = getByTestId("qa-text-area");
        const component = find(textInput, StyledTextArea);
        expect(component!.getAttribute("name")).toBe(props.inputName);
        expect(component!.getAttribute("id")).toBe(
            `cp-text-area-${props.inputName}`
        );
    });

    it("renders correct label", () => {
        const { getByText } = render(<TextArea {...props} />);
        const label = getByText(props.label!);
        expect(label).toBeInTheDocument();
    });

    it("renders correct placeholder", () => {
        const { getByPlaceholderText } = render(<TextArea {...props} />);
        const component = getByPlaceholderText(props.placeholder!);
        expect(component).toBeInTheDocument();
    });

    it("will not renders label if noLabel is true", () => {
        const newProps = {
            ...props,
            noLabel: true,
        };

        const { queryByLabelText } = render(<TextArea {...newProps} />);
        const label = queryByLabelText(newProps.label!);

        expect(label).not.toBeInTheDocument();
    });

    it("renders correct custom background color", () => {
        const newProps = {
            ...props,
            backgroundColor: "#b13737",
        };
        const { getByTestId } = render(<TextArea {...newProps} />);
        const textInput = getByTestId("qa-text-area");
        const component = find(textInput, StyledTextArea);
        const styles = getComputedStyle(component!);
        expect(styles.background).toBe("rgb(177, 55, 55)");
    });

    it("renders error validation message", () => {
        const newProps = {
            ...props,
            error: true,
            helperText: "message",
        };
        const { getByText } = render(<TextArea {...newProps} />);
        const error = getByText(newProps.helperText!);
        expect(error).toBeInTheDocument();
    });

    it("invoke the correct function when change", () => {
        const newProps = {
            ...props,
            onChange: jest.fn(),
        };
        const { getByTestId } = render(<TextArea {...newProps} />);

        const textInput = getByTestId("qa-text-area");
        const component = find(textInput, StyledTextArea);
        fireEvent.change(component!, { target: { value: "a" } });

        expect(newProps.onChange).toHaveBeenCalledTimes(1);
    });
});
