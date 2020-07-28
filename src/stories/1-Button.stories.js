import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import { Icon } from '../components';
import '../styles/stories.scss';

export default {
    title: 'Button',
};

export const ButtonC = () => (
    <div>
        <section className='button-section'>
            <div className='button-section__title'>常用 Button</div>
            <div className='button-section__list'>
                <Button type='primary' onClick={action('clicked')}>
                    Primary Button
                </Button>
                <Button type='default' onClick={action('clicked')}>
                    Secondary Button
                </Button>
                <Button type='text' onClick={action('clicked')}>
                    Text Button
                </Button>
            </div>
        </section>
        <section className='button-section'>
            <div className='button-section__title'>Disable Button</div>
            <div className='button-section__list'>
                <Button type='primary' disabled onClick={action('clicked')}>
                    Primary Button
                </Button>
                <Button type='default' disabled onClick={action('clicked')}>
                    Secondary Button
                </Button>
                <Button type='text' disabled onClick={action('clicked')}>
                    Text Button
                </Button>
            </div>
        </section>
        <section className='button-section'>
            <div className='button-section__title'>Loading Button</div>
            <div className='button-section__list'>
                <Button type='primary' loading>
                    Primary Button
                </Button>
                <Button type='default' loading>
                    Secondary Button
                </Button>
                <Button type='text' loading>
                    Text Button
                </Button>
            </div>
        </section>
        <section className='button-section'>
            <div className='button-section__title'>Button with icon</div>
            <div className='button-section__list'>
                <Button
                    icon={<Icon icon='plus' color='white' />}
                    type='primary'
                >
                    Primary Button
                </Button>
                <Button
                    icon={<Icon icon='emoji' color='#1b9aee' />}
                    type='default'
                >
                    Default Button
                </Button>
                <Button
                    icon={<Icon icon='groupChat' color='#1b9aee' />}
                    type='text'
                >
                    Text Button
                </Button>
            </div>
        </section>
    </div>
);
