import React from 'react';
import colorsList from '../constant/colorConstant';
import fontList from '../constant/fontConstant';
import '../styles/stories.scss';

export default {
    title: 'basic',
};

const Color = ({ color }) => (
    <span className='color-div' style={{ backgroundColor: color }}>
        {color}
    </span>
);

const ColorBlock = (props) => (
    <>
        <div>{props.title}</div>
        <div>
            {props.list.map((color) => (
                <Color color={color.value} key={color.id}></Color>
            ))}
        </div>
    </>
);

export const Colors = () => (
    <div>
        {colorsList.map((color) => (
            <ColorBlock
                title={color.title}
                list={color.list}
                key={color.title}
            ></ColorBlock>
        ))}
    </div>
);

const FontItem = ({ fontFamily, fontSize, fontWeight, title }) => (
    <span
        className='font-div'
        style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
            fontWeight: fontWeight,
        }}
    >
        {title}
    </span>
);

const FontBlock = (props) => (
    <section className='font-section'>
        <h3 className='font-section_title'>{props.title}</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {props.title === 'Font Family' &&
                props.list.map((font) => (
                    <FontItem
                        fontFamily={font.value}
                        key={font.id}
                        title={font.text}
                    ></FontItem>
                ))}
            {props.title === 'Font Size' &&
                props.list.map((font) => (
                    <FontItem
                        fontSize={font.value}
                        key={font.id}
                        title={font.value}
                    ></FontItem>
                ))}
            {props.title === 'Font Weight' &&
                props.list.map((font) => (
                    <FontItem
                        fontWeight={font.value}
                        key={font.id}
                        title={font.value}
                    ></FontItem>
                ))}
        </div>
    </section>
);

export const Font = () => (
    <div>
        {fontList.map((color) => (
            <FontBlock
                title={color.title}
                list={color.list}
                key={color.title}
            ></FontBlock>
        ))}
    </div>
);