import React from 'react';
import { Progress as AntdProgress } from 'antd';
import './progress.scss';

// const progressType = ['circle', 'line'];

// TODO: Need to check if it is number
const formatPercent = (percent) => {
    let percentResult = 0;
    if (percent < 0) {
        percentResult = 0;
    } else if (percent > 100) {
        percentResult = 100;
    } else {
        percentResult = percent;
    }
    return `${percentResult}%`;
};

const Progress = (props) => {
    const { title, type, percent, ...restProps } = props;
    if (type !== 'circle') {
        return (
            <div className='tb-progress'>
                <span>{title}</span>
                <span className='tb-progress-text'>
                    {formatPercent(percent)}
                </span>
                <AntdProgress type='line' percent={percent} {...restProps} />
            </div>
        );
    } else if (type === 'circle') {
        return (
            <AntdProgress
                type='circle'
                percent={percent}
                {...restProps}
                width={64}
            />
        );
    }
};

export default Progress;
