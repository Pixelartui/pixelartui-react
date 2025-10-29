import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Modal } from ".";
import { find } from "styled-components/test-utils";
import { StyledModalContent } from "./styled";

const props = {
    open: true,
    header: "This is the header",
    actionButtons: {
        left: "Cancel",
        right: "Ok",
    },
    children: <div>This is the children</div>,
    onClickButtonLeft: jest.fn(),
    onClickButtonRight: jest.fn(),
};

describe("Modal component", () => {
    it("renders the compnent", () => {
        const { getByTestId } = render(<Modal {...props} />);
        const modal = getByTestId("qa-modal");
        expect(modal).toBeInTheDocument();
    });

    it("renders the correct header", () => {
        const { getByText } = render(<Modal {...props} />);
        const header = getByText(props.header);
        expect(header).toBeInTheDocument();
    });

    it("do not renders the header when there is no header", () => {
        const newProp = {
            ...props,
            header: undefined,
        };
        const { queryByText } = render(<Modal {...newProp} />);
        const header = queryByText(props.header);
        expect(header).not.toBeInTheDocument();
    });

    it("renders the correct custom header", () => {
        const customHeaderText = "This is a custom header";
        const newProp = {
            ...props,
            header: undefined,
            customHeader: <div>{customHeaderText}</div>,
        };
        const { getByText } = render(<Modal {...newProp} />);
        const header = getByText(customHeaderText);
        expect(header).toBeInTheDocument();
    });

    it("renders the correct actions", () => {
        const { getByText } = render(<Modal {...props} />);
        const leftButton = getByText(props.actionButtons.left);
        const rightButton = getByText(props.actionButtons.right);
        expect(leftButton).toBeInTheDocument();
        expect(rightButton).toBeInTheDocument();
    });

    it("do not renders the actions when not needed", () => {
        const newProp = {
            ...props,
            actionButtons: undefined,
        };
        const { queryByText } = render(<Modal {...newProp} />);
        const leftButton = queryByText(props.actionButtons.left);
        expect(leftButton).not.toBeInTheDocument();
    });

    it("renders the correct custom actions", () => {
        const customButtonText = "Custom button";
        const newProp = {
            ...props,
            actions: undefined,
            customAction: (
                <div>
                    <button>{customButtonText}</button>
                </div>
            ),
        };
        const { getByText } = render(<Modal {...newProp} />);
        const customButton = getByText(customButtonText);
        expect(customButton).toBeInTheDocument();
    });

    it("close when intended", () => {
        const { getByText, queryByTestId } = render(<Modal {...props} />);
        const closeButton = getByText("X");
        fireEvent.click(closeButton);
        const modal = queryByTestId("qa-modal");
        expect(modal).not.toBeInTheDocument();
    });

    it("renders the correct custom background color", () => {
        const newProp = {
            ...props,
            backgroundColor: "#b13737",
        };
        const { getByTestId } = render(<Modal {...newProp} />);
        const modal = getByTestId("qa-modal");
        const component = find(modal, StyledModalContent);
        const styles = getComputedStyle(component!);
        expect(styles.background).toBe("rgb(177, 55, 55)");
    });

    it("invoke the the correct function when actions are click", () => {
        const { getByText } = render(<Modal {...props} />);
        const rightButton = getByText(props.actionButtons.right);

        fireEvent.click(rightButton);
        expect(props.onClickButtonRight).toHaveBeenCalledTimes(1);
    });
});
