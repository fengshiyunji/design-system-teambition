import React from 'react';
import { Tag } from '../components';
import '../styles/stories.scss';

export default {
    title: 'Tag',
};

export const TagC = () => (
    <section>
        <Tag type='blue'>文字标签</Tag>
        <Tag type='green'>文字标签</Tag>
        <Tag type='red'>文字标签</Tag>
        <Tag type='orange'>文字标签</Tag>
        <Tag type='grey'>文字标签</Tag>

        <Tag color='orange'>文字标签</Tag>
        <Tag color='#e62412' bgColor='yellow'>文字标签</Tag>
    </section>
);
