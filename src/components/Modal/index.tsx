import React from "react";
import { ModalProps } from "./types";
import { createPortal } from "react-dom";
import { StyledPixelBox } from "../SharedComponent/StyledPixelBox";
import {
    StyledBackdrop,
    StyledCloseButton,
    StyledModalContent,
    StyledModalContentActions,
    StyledModalContentBody,
    StyledModalContentHeader,
} from "./styled";
import { Button } from "../Button";
import { theme } from "../../Theme";
import { adjust } from "../../Theme/helper";
import { StyledContainer } from "../SharedComponent/StyledContainer";

export const Modal: React.FC<ModalProps> = ({
    backgroundColor,
    open,
    children,
    header,
    actionButtons,
    customHeader,
    customAction,
    disabled,
    name,
    onClickButtonLeft,
    onClickButtonRight,
    handleClose,
    ...props
}) => {
    const handleModalClose = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (handleClose) {
            handleClose(e);
        }
    };
    const handleLeftButtonClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (handleClose) {
            handleModalClose(e);
        }
        if (onClickButtonLeft) {
            onClickButtonLeft(e);
        }
    };
    const handleRightButtonClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (handleClose) {
            handleModalClose(e);
        }
        if (onClickButtonRight) {
            onClickButtonRight(e);
        }
    };

    return (
        open &&
        createPortal(
            <StyledBackdrop id={`cp-modal-backdrop-${name}`}>
                <StyledContainer
                    testId="qa-modal"
                    className="cp-modal-container"
                    {...props}
                >
                    <StyledPixelBox
                        className={`cp-modal-box-${name}`}
                        backgroundColor={backgroundColor}
                        width="400px"
                        height="400px"
                    >
                        <StyledModalContent
                            $backgroundColor={backgroundColor}
                            className="cp-modal-content"
                        >
                            <StyledCloseButton
                                text="X"
                                buttonSize="small"
                                buttonType="main"
                                onClick={handleModalClose}
                                backgroundColor={backgroundColor}
                                round
                                width="12px"
                                height="30px"
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
                </StyledContainer>
            </StyledBackdrop>,
            document.body
        )
    );
};
