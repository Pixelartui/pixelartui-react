import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Pixelator } from ".";
import { find, findAll } from "styled-components/test-utils";
import { StyledGridWrapper, StyledPixel } from "./styled";
import { StyledPixelSolid } from "../Pixel/styled";

const props = {
    pixelPerRow: 10,
    pixelPerCol: 10,
    pixelSize: 5,
    showgrid: false,
    pixels: {
        "0": { color: "red" },
        "1": { color: "blue" },
    },
};

describe("Pixel component", () => {
    it("renders the compnent", () => {
        const { getByTestId } = render(<Pixelator {...props} />);
        const pixelator = getByTestId("qa-pixelator");
        expect(pixelator).toBeInTheDocument();
    });

    it("renders the correct rows and column", () => {
        const { getByTestId } = render(<Pixelator {...props} />);
        const pixelator = getByTestId("qa-pixelator");
        const component = findAll(pixelator, StyledPixel);
        expect(component.length).toBe(props.pixelPerCol * props.pixelPerRow);
    });

    it("renders the grid if enabled", () => {
        const newProps = {
            ...props,
            showgrid: true,
        };
        const { getByTestId } = render(<Pixelator {...newProps} />);
        const pixel = getByTestId("qa-pixelator");
        const component = find(pixel, StyledGridWrapper);
        expect(component).toBeInTheDocument();
    });

    it("will not renders the grid if disabled", () => {
        const { queryByTestId } = render(<Pixelator {...props} />);
        const gridWrapper = queryByTestId("qa-pixelator-grid-wrapper");
        expect(gridWrapper).not.toBeInTheDocument();
    });

    it("renders the correct pixel color", () => {
        const { getByTestId } = render(<Pixelator {...props} />);
        const pixelator = getByTestId("qa-pixelator");
        const component = findAll(pixelator, StyledPixelSolid);
        const firstPixelStyling = getComputedStyle(component[0]!);
        const secondPixelStyling = getComputedStyle(component[1]!);
        console.log(firstPixelStyling.background);
        console.log(secondPixelStyling.background);

        expect(firstPixelStyling.background).toBe("rgb(255, 0, 0)");
        expect(secondPixelStyling.background).toBe("rgb(0, 0, 255)");
    });
});
