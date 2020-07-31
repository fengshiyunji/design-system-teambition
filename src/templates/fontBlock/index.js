import React from 'react';

const FontBlock = ({ fontFamily, fontSize, fontWeight, title }) => (
    <span
        className='font-block'
        style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
        }}
    >
        {title}
    </span>
);

export default FontBlock;
