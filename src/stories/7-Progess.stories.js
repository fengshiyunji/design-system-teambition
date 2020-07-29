import React from 'react';
import { Progress } from '../components';
import '../styles/stories.scss';

export default {
    title: 'Progress',
};

export const ProgressC = () => (
    <section>
        <Progress percent={0} title='项目进度' />
        <Progress percent={25} title='项目进度' strokeColor='#87d2ff'/>
        <Progress percent={50} title='项目进度' strokeColor='#ffa941' />
        <Progress percent={75} title='项目进度' strokeColor='#f87872' />
        <Progress percent={100} title='项目进度' strokeColor='#64d16d' />

        <Progress type="circle" percent={0}   />
        <Progress type="circle" percent={25} strokeColor='#87d2ff' />
        <Progress type="circle" percent={50} strokeColor='#ffa941' />
        <Progress type="circle" percent={75} strokeColor='#f87872' />
        <Progress type="circle" percent={100} strokeColor='#64d16d' />
    </section>
);
