import React from 'react';
import { Tabs, Tab, Icon } from '../components';
import '../styles/stories.scss';

export default {
    title: 'Tab',
};

export const TabC = () => (
    <section>
        <Tabs>
            <Tab title='Title tab1'>This is content of Title Tab1.</Tab>
            <Tab title='Title tab2'>This is content of Title Tab2.</Tab>
            <Tab title='Title tab3'>This is content of Title Tab3.</Tab>
        </Tabs>

        <Tabs>
            <Tab icon={<Icon icon='star' />}>This is content of Icon Tab1.</Tab>
            <Tab icon={<Icon icon='stroke' />}>This is content of Icon Tab2.</Tab>
        </Tabs>

        <Tabs>
            <Tab title='Tab1 with icon and title' icon={<Icon icon='star' />}>This is content of Tab1 with icon and title.</Tab>
            <Tab title='Tab2 with icon and title' icon={<Icon icon='stroke' />}>This is content of Tab2 with icon and title.</Tab>
        </Tabs>
    </section>
);
