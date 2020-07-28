import React from 'react';
import './icon.scss';

const Icon = ({ size, icon, color }) => (
    <span role="img" aria-label="message" className={`tb-icon anticon anticon-message icon-${icon}`}
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
