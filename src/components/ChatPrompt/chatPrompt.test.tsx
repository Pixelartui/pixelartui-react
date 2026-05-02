import "@testing-library/jest-dom";
import { ChatPrompt } from ".";
import { fireEvent, render } from "@testing-library/react";
import { ChatPromptProps } from "./types";
import { find } from "styled-components/test-utils";
import { StyledChatPromptTextArea, StyledSendButton } from "./styled";

const props: ChatPromptProps = {
    inputName: "test-chat",
    placeholder: "Type a message...",
};

describe("ChatPrompt component", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<ChatPrompt {...props} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        expect(chatPrompt).toBeInTheDocument();
    });

    it("renders correct name and id", () => {
        const { getByTestId } = render(<ChatPrompt {...props} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const component = find(chatPrompt, StyledChatPromptTextArea);
        expect(component!.getAttribute("name")).toBe(props.inputName);
        expect(component!.getAttribute("id")).toBe(
            `cp-chat-prompt-${props.inputName}`
        );
    });

    it("renders correct placeholder", () => {
        const { getByPlaceholderText } = render(<ChatPrompt {...props} />);
        const component = getByPlaceholderText(props.placeholder!);
        expect(component).toBeInTheDocument();
    });

    it("renders send button", () => {
        const { getByTestId } = render(<ChatPrompt {...props} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const button = find(chatPrompt, StyledSendButton);
        expect(button).toBeInTheDocument();
    });

    it("invokes onChange when typing", () => {
        const newProps = {
            ...props,
            onChange: jest.fn(),
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const component = find(chatPrompt, StyledChatPromptTextArea);
        fireEvent.change(component!, { target: { value: "hello" } });
        expect(newProps.onChange).toHaveBeenCalledTimes(1);
    });

    it("invokes onSend when send button is clicked", () => {
        const newProps = {
            ...props,
            onSend: jest.fn(),
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const textarea = find(chatPrompt, StyledChatPromptTextArea);
        const button = find(chatPrompt, StyledSendButton);

        fireEvent.change(textarea!, { target: { value: "hello" } });
        fireEvent.click(button!);

        expect(newProps.onSend).toHaveBeenCalledWith("hello");
    });

    it("invokes onSend on Enter key press", () => {
        const newProps = {
            ...props,
            onSend: jest.fn(),
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const textarea = find(chatPrompt, StyledChatPromptTextArea);

        fireEvent.change(textarea!, { target: { value: "hello" } });
        fireEvent.keyDown(textarea!, { key: "Enter", shiftKey: false });

        expect(newProps.onSend).toHaveBeenCalledWith("hello");
    });

    it("does not invoke onSend on Shift+Enter", () => {
        const newProps = {
            ...props,
            onSend: jest.fn(),
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const textarea = find(chatPrompt, StyledChatPromptTextArea);

        fireEvent.change(textarea!, { target: { value: "hello" } });
        fireEvent.keyDown(textarea!, { key: "Enter", shiftKey: true });

        expect(newProps.onSend).not.toHaveBeenCalled();
    });

    it("does not invoke onSend when disabled", () => {
        const newProps = {
            ...props,
            disabled: true,
            onSend: jest.fn(),
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const textarea = find(chatPrompt, StyledChatPromptTextArea);
        const button = find(chatPrompt, StyledSendButton);

        fireEvent.change(textarea!, { target: { value: "hello" } });
        fireEvent.click(button!);

        expect(newProps.onSend).not.toHaveBeenCalled();
    });

    it("does not invoke onSend when value is empty", () => {
        const newProps = {
            ...props,
            onSend: jest.fn(),
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const button = find(chatPrompt, StyledSendButton);

        fireEvent.click(button!);

        expect(newProps.onSend).not.toHaveBeenCalled();
    });

    it("renders correct custom background color", () => {
        const newProps = {
            ...props,
            backgroundColor: "#b13737",
        };
        const { getByTestId } = render(<ChatPrompt {...newProps} />);
        const chatPrompt = getByTestId("qa-chat-prompt");
        const component = find(chatPrompt, StyledChatPromptTextArea);
        const styles = getComputedStyle(component!);
        expect(styles.background).toBe("rgb(177, 55, 55)");
    });
});
