import React from 'react';
import { Checkbox } from 'antd';
import '../styles/stories.scss';

export default {
    title: 'Checkbox',
};

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export const CheckboxC = () => (
    <section>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}></Checkbox>
    </section>
);
