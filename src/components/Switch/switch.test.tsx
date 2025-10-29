import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Switch } from ".";
import { SwitchProps } from "./types";
import { find } from "styled-components/test-utils";
import { StyledSwitch, StyledSwitchWrapper } from "./styled";

const props: SwitchProps = {
    name: "test-input",
    label: "The test",
    type: "main",
    onChange: jest.fn(),
};

describe("Switch component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Switch {...props} />);
        const switchComponent = getByTestId("qa-switch");
        expect(switchComponent).toBeInTheDocument();
    });

    it("renders correct name and id", () => {
        const { getByTestId } = render(<Switch {...props} />);
        const switchComponent = getByTestId("qa-switch");
        const component = find(switchComponent, StyledSwitch);
        expect(component!.getAttribute("name")).toBe(props.name);
        expect(component!.getAttribute("id")).toBe(`cp-switch-${props.name}`);
    });

    it("renders correct label", () => {
        const { getByText } = render(<Switch {...props} />);
        const label = getByText(props.label!);
        expect(label).toBeInTheDocument();
    });

    it("will not renders label if noLabel is true", () => {
        const newProps = {
            ...props,
            noLabel: true,
        };

        const { queryByLabelText } = render(<Switch {...newProps} />);
        const label = queryByLabelText(newProps.label!);

        expect(label).not.toBeInTheDocument();
    });

    it("renders correct custom background color", () => {
        const newProps = {
            ...props,
            backgroundColor: "#b13737",
            defaultChecked: true,
        };
        const { getByTestId } = render(<Switch {...newProps} />);
        const switchComponent = getByTestId("qa-switch");
        const component = find(switchComponent, StyledSwitchWrapper);
        const styles = getComputedStyle(component!);
        expect(styles.background).toBe("rgb(177, 55, 55)");
    });

    it("invoke the correct function when change", () => {
        const { getByTestId } = render(<Switch {...props} />);

        const textInput = getByTestId("qa-switch");
        const switchComponent = find(textInput, StyledSwitch);
        fireEvent.click(switchComponent!);

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });
});
