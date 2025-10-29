import type { Meta } from "@storybook/react-vite";
import styled from "styled-components";
import { Modal } from ".";
import { Button } from "../Button";

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
        open: true,
        header: "Attention",
        actionButtons: {
            left: "Cancel",
            right: "OK",
        },
        children: <StyledContent>This is a content</StyledContent>,
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
    },
};

export const ModalNoHeaderAndActions = {
    args: {
        open: true,
        children: <StyledContent>This is a content</StyledContent>,
    },
};

export const ModalCustomHeader = {
    args: {
        open: true,
        children: <StyledContent>This is a content</StyledContent>,
        customHeader: <StyledHeader>This is a custom Header</StyledHeader>,
    },
};

export const ModalCustomAction = {
    args: {
        open: true,
        children: <StyledContent>This is a content</StyledContent>,
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
    },
};
