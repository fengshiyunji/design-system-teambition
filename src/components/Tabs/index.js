import React, { useState } from 'react';
import './tabs.scss';

const Tab = (props) => {
    const activeStyles = `${props.isActive ? 'active' : ''}`;
    const marginStyles = `${props.title && props.icon ? 'tb-tab-margin' : ''}`;
    const iconNode = props.icon ? props.icon: null;
    return (
        <button
            className={`tb-tab ${activeStyles}`}
            onClick={(event) => {
                event.preventDefault();
                props.onClick(props.index);
            }}
        >
            {iconNode}
            {props.title && <span className={`${marginStyles}`}>{props.title}</span>}
        </button>
    );
};

const Tabs = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onClickTabItem = (index) => {
        setActiveIndex(index);
    };

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    const renderChildrenWithTabsApiAsProps = () => {
        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                onClick: onClickTabItem,
                index: index,
                isActive: index === activeIndex,
            });
        });
    };

    // Render current active tab content
    const renderActiveTabContent = () => {
        if (activeIndex !== undefined) {
            if (children != null) {
                if (children[activeIndex]) {
                    return children[activeIndex].props.children;
                }
            } else {
                console.dir('Error! This tab has no children!');
            }
        }
    };

    return (
        <>
            <div className='tb-tabs'>
                {renderChildrenWithTabsApiAsProps()}
            </div>
            <div>{renderActiveTabContent()}</div>
        </>
    );
};

export { Tabs, Tab };
