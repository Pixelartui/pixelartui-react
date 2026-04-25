import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Slider } from ".";
import { SliderProps } from "./types";
import { find } from "styled-components/test-utils";
import { StyledSliderInput } from "./styled";

const props: SliderProps = {
    name: "test-slider",
    label: "Volume",
    type: "main",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    onChange: jest.fn(),
};

describe("Slider component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Slider {...props} />);
        const sliderComponent = getByTestId("qa-slider");
        expect(sliderComponent).toBeInTheDocument();
    });

    it("renders correct name and id", () => {
        const { getByTestId } = render(<Slider {...props} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);
        expect(component!.getAttribute("name")).toBe(props.name);
        expect(component!.getAttribute("id")).toBe(`cp-slider-${props.name}`);
    });

    it("renders correct label", () => {
        const { getByText } = render(<Slider {...props} />);
        const label = getByText(props.label!);
        expect(label).toBeInTheDocument();
    });

    it("will not render label if noLabel is true", () => {
        const newProps = {
            ...props,
            noLabel: true,
        };

        const { queryByText } = render(<Slider {...newProps} />);
        const label = queryByText(newProps.label!);

        expect(label).not.toBeInTheDocument();
    });

    it("renders correct default value", () => {
        const { getByTestId } = render(<Slider {...props} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);
        expect(component!.getAttribute("value")).toBe(
            props.defaultValue!.toString()
        );
    });

    it("renders correct min and max values", () => {
        const { getByTestId } = render(<Slider {...props} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);
        expect(component!.getAttribute("min")).toBe(props.min!.toString());
        expect(component!.getAttribute("max")).toBe(props.max!.toString());
    });

    it("renders correct step value", () => {
        const { getByTestId } = render(<Slider {...props} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);
        expect(component!.getAttribute("step")).toBe(props.step!.toString());
    });

    it("displays current value when showValue is true", () => {
        const { getByText } = render(<Slider {...props} showValue={true} />);
        const valueDisplay = getByText(props.defaultValue!.toString());
        expect(valueDisplay).toBeInTheDocument();
    });

    it("does not display value when showValue is false", () => {
        const { queryByText } = render(
            <Slider {...props} showValue={false} />
        );
        const valueDisplay = queryByText(props.defaultValue!.toString());
        expect(valueDisplay).not.toBeInTheDocument();
    });

    it("calls onChange when value changes", () => {
        const { getByTestId } = render(<Slider {...props} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);

        fireEvent.change(component!, { target: { value: "75" } });

        expect(props.onChange).toHaveBeenCalled();
    });

    it("does not call onChange when disabled", () => {
        const newProps = {
            ...props,
            disabled: true,
            onChange: jest.fn(),
        };

        const { getByTestId } = render(<Slider {...newProps} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);

        fireEvent.change(component!, { target: { value: "75" } });

        expect(newProps.onChange).not.toHaveBeenCalled();
    });

    it("renders with disabled attribute when disabled is true", () => {
        const newProps = {
            ...props,
            disabled: true,
        };

        const { getByTestId } = render(<Slider {...newProps} />);
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);

        expect(component!.hasAttribute("disabled")).toBe(true);
    });

    it("renders with custom className", () => {
        const customClass = "custom-slider";
        const { getByTestId } = render(
            <Slider {...props} className={customClass} />
        );
        const sliderComponent = getByTestId("qa-slider");

        expect(sliderComponent.classList.contains(customClass)).toBe(true);
    });

    it("works as controlled component", () => {
        const { getByTestId, rerender } = render(
            <Slider {...props} value={25} />
        );
        const sliderComponent = getByTestId("qa-slider");
        const component = find(sliderComponent, StyledSliderInput);

        expect(component!.getAttribute("value")).toBe("25");

        rerender(<Slider {...props} value={75} />);

        expect(component!.getAttribute("value")).toBe("75");
    });
});
