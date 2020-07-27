import React from 'react';
import colorsList from '../constant/colorConstant';
import fontList from '../constant/fontConstant';
import '../styles/stories.scss';
import { Icon } from '../components';

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
    <>
        <p>{props.title}</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
    </>
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

export const Icons = () => (
    <div className="icon-container">
    <section>
        <div className="icon-title">常用图标</div>
        <div>
            <Icon icon='up'></Icon>
            <Icon icon='down'></Icon>
            <Icon icon='left'></Icon>
            <Icon icon='right'></Icon>
            <Icon icon='board'></Icon>
            <Icon icon='calendar'></Icon>
            <Icon icon='cancel'></Icon>
            <Icon icon='chat'></Icon>
            <Icon icon='check'></Icon>
            <Icon icon='clock'></Icon>
            <Icon icon='copy'></Icon>
            <Icon icon='cursor'></Icon>
            <Icon icon='dashboard'></Icon>
            <Icon icon='description'></Icon>
            <Icon icon='edit'></Icon>
            <Icon icon='emoji'></Icon>
            <Icon icon='eye'></Icon>
            <Icon icon='file'></Icon>
            <Icon icon='folder'></Icon>
            <Icon icon='groupChat'></Icon>
            <Icon icon='home'></Icon>
            <Icon icon='inbox'></Icon>
            <Icon icon='information'></Icon>
            <Icon icon='menu'></Icon>
            <Icon icon='more'></Icon>
            <Icon icon='move'></Icon>
            <Icon icon='picture'></Icon>
            <Icon icon='piechart'></Icon>
            <Icon icon='plus'></Icon>
            <Icon icon='pointer'></Icon>
            <Icon icon='post'></Icon>
            <Icon icon='project'></Icon>
            <Icon icon='question'></Icon>
            <Icon icon='relation'></Icon>
            <Icon icon='remove'></Icon>
            <Icon icon='search'></Icon>
            <Icon icon='share'></Icon>
            <Icon icon='sitting'></Icon>
            <Icon icon='star'></Icon>
            <Icon icon='stroke'></Icon>
            <Icon icon='table'></Icon>
            <Icon icon='task'></Icon>
            <Icon icon='text'></Icon>
            <Icon icon='tick'></Icon>
            <Icon icon='trash'></Icon>
            <Icon icon='uploadFile'></Icon>
            <Icon icon='user'></Icon>
            <Icon icon='users'></Icon>
            <Icon icon='wall'></Icon>
            <Icon icon='warning'></Icon>
        </div>
    </section>
    
    <section>
        <div className="icon-title">图标大小</div> 
        <div className="icon-dec">默认是 16px * 16px</div> 
        <div>
            <Icon icon='warning' size='20'></Icon>
            <Icon icon='star' size='30'></Icon>
            <Icon icon='plus' size='50'></Icon>
        </div>
    </section>

    <section>
        <div className="icon-title">图标颜色</div>
        <div className="icon-dec">默认颜色为 #333333</div>
        <div>
            <Icon icon='warning' color='red' size='20'></Icon>
            <Icon icon='star' color='yellow' size='20'></Icon>
            <Icon icon='plus' color='#1EA7FD' size='20'></Icon>
        </div>
    </section>
    </div>
);
