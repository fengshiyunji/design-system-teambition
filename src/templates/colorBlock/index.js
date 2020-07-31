import React from 'react';
import './index.scss';

const ColorBlock = ({ color, title }) => (
    <span className='color-block' style={{ backgroundColor: color }}>
        <span className='color-id'>{title}</span>
        <span>{color}</span>
    </span>
);

export default ColorBlock;