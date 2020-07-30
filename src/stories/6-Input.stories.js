import React from 'react';
import { Input } from '../components';
// import { Input as AntdInput } from 'antd';
import '../styles/stories.scss';

export default {
    title: 'Input',
};

export const InputC = () => (
    <section>
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" disabled />
        <Input placeholder="Basic usage" error errorText="此处为错误提示信息" />
        {/* not working */}
        {/* <AntdInput placeholder="Basic usage" rows={4} /> */}
    </section>
);
