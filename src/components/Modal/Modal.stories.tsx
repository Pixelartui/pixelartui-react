import type { Meta } from "@storybook/react-vite";
import styled from "styled-components";
import { Modal } from ".";
import { Button } from "../Button";
import { useState } from "react";
import { ModalProps } from "./types";
import { fn } from "storybook/test";

const StyledContent = styled.div`
    display: flex;
`;

const StyledHeader = styled.div`
    display: flex;
`;

const meta = {
    title: "Pixel Component/Modal",
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

export const ModalMain = {
    args: {
        header: "Attention",
        actionButtons: {
            left: "Cancel",
            right: "OK",
        },
        name: "story-modal",
        children: <StyledContent>This is a content</StyledContent>,
        onClickButtonRight: fn(),
        onClickButtonLeft: fn(),
    },
    render: (arg: ModalProps) => {
        const [open, setOpen] = useState(false);
        return (
            <div
                style={{
                    cursor: "pointer",
                    display: "flex",
                    width: "100vw",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    buttonSize="medium"
                    buttonType="main"
                    text="Open Modal"
                    onClick={() => setOpen(true)}
                />

                <Modal
                    {...arg}
                    open={open}
                    handleClose={() => setOpen(false)}
                />
            </div>
        );
    },
};

export const ModalCustomBackgroundColor = {
    args: {
        open: true,
        header: "Attention Attention Attention Attention Attention Attention",
        actionButtons: {
            left: "Cancel",
            right: "OK",
        },
        children: <StyledContent>This is a content</StyledContent>,
        backgroundColor: "#b13737",
        name: "story-modal",
    },
};

export const ModalCustomHeightAndWidth = {
    args: {
        open: true,
        header: "Attention Attention Attention Attention Attention Attention",
        actionButtons: {
            left: "Cancel",
            right: "OK",
        },
        children: <StyledContent>This is a content</StyledContent>,
        name: "story-modal",
        width: "600px",
        height: "400px",
    },
};

export const ModalNoHeaderAndActions = {
    args: {
        open: true,
        children: <StyledContent>This is a content</StyledContent>,
        name: "story-modal",
    },
};

export const ModalCustomHeader = {
    args: {
        open: true,
        children: <StyledContent>This is a content</StyledContent>,
        customHeader: <StyledHeader>This is a custom Header</StyledHeader>,
        name: "story-modal",
    },
};

export const ModalCustomAction = {
    args: {
        open: true,
        children: <StyledContent>This is a content</StyledContent>,
        name: "story-modal",
        customAction: (
            <Button
                text={"Custom Action"}
                buttonSize="medium"
                buttonType="main"
                onClick={() => {}}
            />
        ),
    },
};

export const ModalCustomButtonDisabled = {
    args: {
        open: true,
        header: "Attention Attention",
        actionButtons: {
            left: "Cancel",
            right: "OK",
        },
        disabled: " true",
        children: <StyledContent>This is a content</StyledContent>,
        name: "story-modal",
    },
};

export const ModalLightStyle = {
    args: {
        open: true,
        header: "Attention Attention",
        actionButtons: {
            left: "Cancel",
            right: "OK",
        },
        children: <StyledContent>This is a content</StyledContent>,
        name: "story-modal",
        modalStyle: "light",
    },
};
