import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';

export default {
    title: 'Button',
    component: Button,
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
            </div>
        </section>
        <section className='button-section'>
            <div className='button-section__title'>Loading Button</div>
            <div className='button-section__list'>
                <Button type='primary' loading>
                </Button>
                <Button type='default' loading>
                </Button>
            </div>
        </section>        
        </div>
);
