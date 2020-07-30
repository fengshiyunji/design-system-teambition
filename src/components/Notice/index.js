import React from 'react';
import './notice.scss';
import Icon from '../Icon';

const getColorByType = (type) => {
    let color = '#1b9aee';
    switch (type) {
        case 'info':
            color = '#1b9aee';
            break;
        case 'error':
            color = '#f87872';
            break;
        case 'warning':
            color = '#ffa941';
            break;
        case 'success':
            color = '#64d16d';
            break;
        default:
            break;
    }
    return color;
};

const getIconByType = (type) => {
    let icon = 'information';
    switch (type) {
        case 'info':
            icon = 'information';
            break;
        case 'error':
            icon = 'remove';
            break;
        case 'warning':
            icon = 'warning';
            break;
        case 'success':
            icon = 'check';
            break;
        default:
            break;
    }
    return <Icon color={getColorByType(type)} icon={icon} size={16} />;
};

export const Message = ({ type, text }) => (
    <div className={`tb-message tb-message--${type}`}>
        {getIconByType(type)}
        <span className='tb-message__text'>{text}</span>
    </div>
);

export const Toast = ({ type, text }) => (
    <div
        className={`tb-toast tb-toast--${type}`}
        style={{ borderLeftColor: `${getColorByType(type)}` }}
    >
        {getIconByType(type)}
        <span className='tb-toast__text'>{text}</span>
        <Icon color="#999999" icon='cancel' size={12} />
    </div>
);
