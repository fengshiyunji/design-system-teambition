import React from 'react';
import { Message, Toast } from '../components';
import '../styles/stories.scss';

export default {
    title: 'Notice',
};

export const MessageC = () => (
    <section>
        <Message type='info' text='This is a info message!' />
        <Message type='warning' text='This is a warning message!' />
        <Message type='error' text='This is a error message!' />
        <Message type='success' text='This is a success message!' />
    </section>
);

export const ToastC = () => (
    <section>
        <Toast type='info' text='This is a info toast!' />
        <Toast type='warning' text='This is a warning toast!' />
        <Toast type='error' text='This is a error toast!' />
        <Toast type='success' text='This is a success toast!' />
    </section>
);
