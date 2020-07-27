import React from 'react';
import './icon.scss';

const Icon = ({ size, icon, color }) => (
    <div className={`icon-block icon-${icon}`}
        style={{ 
            height: `${size}px`, 
            width: `${size}px`,
            display: 'inline-block',
            backgroundColor: `${color}`
        }
    }
    />
);

export default Icon;
