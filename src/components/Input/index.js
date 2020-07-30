import React from 'react';
import { Input as AntdInput } from 'antd';
import './input.scss';

const Input = (props) => {
    const { error, errorText, ...restProps } = props;
    if (error) {
        return (
            <>
                <span className='tb-input__error-input'><AntdInput {...restProps} /></span>
                {errorText && <span className='tb-input__error-text'>{errorText}</span>}
            </>
        );
    } else {
        return <AntdInput {...restProps} />;
    }
};

export default Input;
