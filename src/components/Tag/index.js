import React from 'react';
import './tag.scss';

const tagType = ['blue', 'green', 'red', 'grey', 'orange'];

const Tag = ({
    color = '#1b9aee',
    bgColor = '#e8f4fd',
    type,
    children,
}) => {
    const styleObj = !tagType.includes(type) ? {
        color: `${color}`,
        backgroundColor: `${bgColor}`,
    }: null;
    return(
    <span
        className={`tb-tag tb-tag-${type}`}
        style={styleObj}
    >
        {children}
    </span>)
};

export default Tag;
