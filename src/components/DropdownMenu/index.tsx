import React, { useState, useRef, useEffect } from "react";
import { DropdownMenuProps } from "./types";
import {
    StyledDropdownContainer,
    StyledDropdownTrigger,
    StyledDropdownList,
    StyledDropdownItem,
} from "./styled";

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    items,
    trigger,
    backgroundColor,
    className,
    onSelect,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleItemClick = (value: string, disabled?: boolean) => {
        if (disabled) return;
        setIsOpen(false);
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <StyledDropdownContainer
            ref={containerRef}
            data-testid="qa-dropdown-menu"
            className={`cp-dropdown-menu ${className || ""}`}
            {...props}
        >
            <StyledDropdownTrigger
                className="cp-dropdown-trigger"
                onClick={handleToggle}
                role="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {trigger}
            </StyledDropdownTrigger>
            <StyledDropdownList
                className="cp-dropdown-list"
                $isOpen={isOpen}
                role="menu"
            >
                {items.map((item, index) => (
                    <StyledDropdownItem
                        key={index}
                        className="cp-dropdown-item"
                        role="menuitem"
                        $disabled={item.disabled}
                        $backgroundColor={backgroundColor}
                        onClick={() =>
                            handleItemClick(item.value, item.disabled)
                        }
                        aria-disabled={item.disabled}
                    >
                        {item.label}
                    </StyledDropdownItem>
                ))}
            </StyledDropdownList>
        </StyledDropdownContainer>
    );
};
