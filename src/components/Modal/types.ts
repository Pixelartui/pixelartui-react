import { ReactNode } from "react";
import { StyledPixelBoxType } from "../SharedComponent/StyledPixelBox/types";

export interface ActionText {
    left: string;
    right: string;
}

export type ModalStyle = StyledPixelBoxType;

export interface ModalProps {
    backgroundColor?: string;
    open: boolean;
    header?: string;
    customHeader?: ReactNode;
    actionButtons?: ActionText;
    customAction?: ReactNode;
    children?: ReactNode;
    disabled?: boolean;
    name: string;
    className?: string;
    modalStyle?: ModalStyle;
    width?: string;
    height?: string;
    onClickButtonLeft?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    onClickButtonRight?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    handleClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
