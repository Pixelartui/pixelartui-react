import React, { useState } from "react";
import { TabsProps } from "./types";
import {
    StyledTabsContainer,
    StyledTabList,
    StyledTab,
    StyledTabPanel,
} from "./styled";

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultActiveIndex = 0,
    activeIndex,
    backgroundColor,
    className,
    onChange,
    ...props
}) => {
    const [currentIndex, setCurrentIndex] = useState(defaultActiveIndex);

    const isControlled = activeIndex !== undefined;
    const activeTab = isControlled ? activeIndex : currentIndex;

    const handleTabClick = (index: number) => {
        if (tabs[index]?.disabled) return;
        if (!isControlled) {
            setCurrentIndex(index);
        }
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <StyledTabsContainer
            data-testid="qa-tabs"
            className={`cp-tabs ${className || ""}`}
            {...props}
        >
            <StyledTabList className="cp-tabs-list" role="tablist">
                {tabs.map((tab, index) => (
                    <StyledTab
                        key={index}
                        className="cp-tab"
                        role="tab"
                        aria-selected={activeTab === index}
                        $isActive={activeTab === index}
                        $backgroundColor={backgroundColor}
                        $disabled={tab.disabled}
                        disabled={tab.disabled}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </StyledTab>
                ))}
            </StyledTabList>
            <StyledTabPanel className="cp-tab-panel" role="tabpanel">
                {tabs[activeTab]?.content}
            </StyledTabPanel>
        </StyledTabsContainer>
    );
};
