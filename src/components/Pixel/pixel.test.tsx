import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Pixel } from ".";
import { find } from "styled-components/test-utils";
import { StyledPixelSolid } from "./styled";

const props = {
    width: "10px",
    height: "10px",
    backgroundColor: "#b13737",
};

describe("Pixel component", () => {
    it("renders the compnent", () => {
        const { getByTestId } = render(<Pixel {...props} />);
        const pixel = getByTestId("qa-pixel");
        expect(pixel).toBeInTheDocument();
    });

    it("renders the correct width", () => {
        const { getByTestId } = render(<Pixel {...props} />);
        const pixel = getByTestId("qa-pixel");
        const component = find(pixel, StyledPixelSolid);
        const componentStyling = getComputedStyle(component!);
        expect(componentStyling.width).toBe(props.width);
    });

    it("renders the correct height", () => {
        const { getByTestId } = render(<Pixel {...props} />);
        const pixel = getByTestId("qa-pixel");
        const component = find(pixel, StyledPixelSolid);
        const componentStyling = getComputedStyle(component!);
        expect(componentStyling.height).toBe(props.height);
    });

    it("renders the correct color", () => {
        const { getByTestId } = render(<Pixel {...props} />);
        const pixel = getByTestId("qa-pixel");
        const component = find(pixel, StyledPixelSolid);
        const componentStyling = getComputedStyle(component!);
        expect(componentStyling.background).toBe("rgb(177, 55, 55)");
    });
});
