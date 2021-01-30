import React, { Component, useState } from 'react';
import './Button.scss';

export class Button extends React.Component {

    render() {

        const {
            style,
            theme,
            type,
            value,
            onClickHandler
        } = this.props;

        const buttonClass = `button-${theme}`;
        
        return (
            <button type={type} className={`${buttonClass}`} onClick={onClickHandler} style={style}>
                {value}
            </button>
        )
    }
}

export default Button;