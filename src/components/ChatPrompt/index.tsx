import React, { useState } from "react";
import { ChatPromptProps } from "./types";
import {
    StyledChatPromptContainer,
    StyledChatPromptInner,
    StyledChatPromptTextArea,
    StyledSendButton,
} from "./styled";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";

export const ChatPrompt: React.FC<ChatPromptProps> = ({
    inputName,
    backgroundColor,
    placeholder = "Type a message...",
    disabled,
    value,
    chatPromptStyle = "dark",
    width,
    height,
    fullwidth,
    onChange,
    onSend,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState("");

    const currentValue = value !== undefined ? value : internalValue;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (value === undefined) {
            setInternalValue(event.target.value);
        }
        if (onChange) {
            onChange(event);
        }
    };

    const handleSend = () => {
        if (disabled || !currentValue.trim()) return;

        if (onSend) {
            onSend(currentValue.trim());
        }

        if (value === undefined) {
            setInternalValue("");
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <StyledChatPromptContainer
            testId="qa-chat-prompt"
            className="cp-chat-prompt-container"
            $fullwidth={fullwidth}
            {...props}
        >
            <StyledPixelBox
                className="cp-chat-prompt-box-wrapper"
                disabled={disabled}
                backgroundColor={backgroundColor}
                style={chatPromptStyle}
                fullwidth={fullwidth}
            >
                <StyledChatPromptInner className="cp-chat-prompt-inner">
                    <StyledChatPromptTextArea
                        name={inputName}
                        value={currentValue}
                        className="cp-chat-prompt-textarea"
                        id={`cp-chat-prompt-${inputName}`}
                        placeholder={placeholder}
                        $backgroundColor={backgroundColor}
                        disabled={disabled}
                        $disabled={disabled}
                        onChange={handleOnChange}
                        onKeyDown={handleKeyDown}
                        $width={width}
                        $height={height}
                        $fullwidth={fullwidth}
                        rows={1}
                    />
                    <StyledSendButton
                        className="cp-chat-prompt-send-button"
                        $disabled={disabled}
                        disabled={disabled}
                        onClick={handleSend}
                        type="button"
                    >
                        Send
                    </StyledSendButton>
                </StyledChatPromptInner>
            </StyledPixelBox>
        </StyledChatPromptContainer>
    );
};
