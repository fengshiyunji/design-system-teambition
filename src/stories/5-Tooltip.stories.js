import React from 'react';
import { Tooltip } from 'antd';
import '../styles/stories.scss';

export default {
    title: 'Tooltip',
};

const tooltipText = 'I am tooltip text!';

export const TooltipC = () => (
    <section>
        <Tooltip placement='top' title={tooltipText}>
            <span className='tooltip-item'>Top</span>
        </Tooltip>
        <Tooltip placement='bottom' title={tooltipText}>
            <span className='tooltip-item'>Bottom</span>
        </Tooltip>
        <Tooltip placement='left' title={tooltipText}>
            <span className='tooltip-item'>Left</span>
        </Tooltip>
        <Tooltip placement='right' title={tooltipText}>
            <span className='tooltip-item'>Right</span>
        </Tooltip>
    </section>
);
