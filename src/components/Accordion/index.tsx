import React, { useState } from "react";
import { AccordionProps } from "./types";
import {
    StyledAccordionContainer,
    StyledAccordionItem,
    StyledAccordionHeader,
    StyledAccordionIcon,
    StyledAccordionPanel,
} from "./styled";

export const Accordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    defaultOpenIndexes = [],
    backgroundColor,
    className,
    onChange,
    ...props
}) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes);

    const toggleItem = (index: number) => {
        const item = items[index];
        if (!item || item.disabled) return;

        let newOpenIndexes: number[];
        if (openIndexes.includes(index)) {
            newOpenIndexes = openIndexes.filter((i) => i !== index);
        } else if (allowMultiple) {
            newOpenIndexes = [...openIndexes, index];
        } else {
            newOpenIndexes = [index];
        }

        setOpenIndexes(newOpenIndexes);
        onChange?.(newOpenIndexes);
    };

    return (
        <StyledAccordionContainer
            data-testid="qa-accordion"
            className={`cp-accordion ${className || ""}`}
            {...props}
        >
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                    <StyledAccordionItem
                        key={index}
                        className="cp-accordion-item"
                    >
                        <StyledAccordionHeader
                            $isOpen={isOpen}
                            $disabled={item.disabled}
                            $backgroundColor={backgroundColor}
                            className="cp-accordion-header"
                            onClick={() => toggleItem(index)}
                            aria-expanded={isOpen}
                            aria-disabled={item.disabled}
                            type="button"
                        >
                            {item.title}
                            <StyledAccordionIcon $isOpen={isOpen}>
                                ▼
                            </StyledAccordionIcon>
                        </StyledAccordionHeader>
                        <StyledAccordionPanel
                            $isOpen={isOpen}
                            className="cp-accordion-panel"
                            role="region"
                        >
                            {item.content}
                        </StyledAccordionPanel>
                    </StyledAccordionItem>
                );
            })}
        </StyledAccordionContainer>
    );
};
