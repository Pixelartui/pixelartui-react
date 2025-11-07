import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Box } from ".";
import { BoxProps } from "./types";

const props: BoxProps = {
    children: <div>This is the children</div>,
};

describe("Switch component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Box {...props} />);
        const box = getByTestId("qa-box");
        expect(box).toBeInTheDocument();
    });

    it("renders the children correctly", () => {
        const { getByText } = render(<Box {...props} />);
        const box = getByText("This is the children");
        expect(box).toBeInTheDocument();
    });
});
