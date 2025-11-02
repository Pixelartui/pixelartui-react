import { ReactNode } from "react";

export interface ActionText {
    left: string;
    right: string;
}

export interface ModalProps {
    backgroundColor?: string;
    open: boolean;
    header?: string;
    customHeader?: ReactNode;
    actionButtons?: ActionText;
    customAction?: ReactNode;
    children?: ReactNode;
    disabled?: boolean;
    onClickButtonLeft?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    onClickButtonRight?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    handleClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
