import React, { useState } from "react";
import { ModalProps } from "./types";
import { createPortal } from "react-dom";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import {
    StyledBackdrop,
    StyledCloseButton,
    StyledModalContainer,
    StyledModalContent,
    StyledModalContentActions,
    StyledModalContentBody,
    StyledModalContentHeader,
} from "./styled";
import { Button } from "../Button";
import { theme } from "../../Theme";
import { adjust } from "../../Theme/helper";

export const Modal: React.FC<ModalProps> = ({
    backgroundColor,
    open,
    children,
    header,
    actionButtons,
    customHeader,
    customAction,
    disabled,
    onClickButtonLeft,
    onClickButtonRight,
    ...props
}) => {
    const [openModal, setOpen] = useState(open);
    const handleClose = () => {
        setOpen(false);
    };
    const handleLeftButtonClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        handleClose();
        if (onClickButtonLeft) {
            onClickButtonLeft(e);
        }
    };
    const handleRightButtonClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        handleClose();
        if (onClickButtonRight) {
            onClickButtonRight(e);
        }
    };

    return (
        openModal &&
        createPortal(
            <StyledBackdrop>
                <StyledModalContainer {...props} testId="qa-modal">
                    <StyledPixelBox backgroundColor={backgroundColor}>
                        <StyledModalContent
                            $backgroundColor={backgroundColor}
                            className="cp-modal-content"
                        >
                            <StyledCloseButton
                                text="X"
                                buttonSize="small"
                                buttonType="main"
                                onClick={handleClose}
                                backgroundColor={backgroundColor}
                                round
                            />
                            {customHeader
                                ? customHeader
                                : header && (
                                      <StyledModalContentHeader className="cp-modal-content-header">
                                          {header}
                                      </StyledModalContentHeader>
                                  )}
                            <StyledModalContentBody className="cp-modal-content-body">
                                {children}
                            </StyledModalContentBody>
                            <StyledModalContentActions className="cp-modal-content-actions">
                                {customAction
                                    ? customAction
                                    : actionButtons && (
                                          <>
                                              <Button
                                                  text={actionButtons!.left}
                                                  buttonSize={"medium"}
                                                  buttonType={"main"}
                                                  onClick={
                                                      handleLeftButtonClick
                                                  }
                                                  backgroundColor={
                                                      backgroundColor
                                                          ? backgroundColor
                                                          : theme.general.color
                                                                .primary
                                                  }
                                              />
                                              <Button
                                                  text={actionButtons!.right}
                                                  buttonSize={"medium"}
                                                  buttonType={"main"}
                                                  onClick={
                                                      handleRightButtonClick
                                                  }
                                                  disabled={disabled}
                                                  backgroundColor={
                                                      backgroundColor
                                                          ? adjust(
                                                                backgroundColor,
                                                                40
                                                            )
                                                          : theme.general.color
                                                                .secondary
                                                  }
                                              />
                                          </>
                                      )}
                            </StyledModalContentActions>
                        </StyledModalContent>
                    </StyledPixelBox>
                </StyledModalContainer>
            </StyledBackdrop>,
            document.body
        )
    );
};
