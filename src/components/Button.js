import React, { Component, useState } from 'react';
import classNames from 'classnames';
import './Button.scss';

export class Button extends React.Component {

    render() {

        const {
            style,
            theme,
            type,
            value,
            onClickHandler,
            disabled
        } = this.props;

        // const buttonClass = `button-${theme}`;

        const buttonClass = classNames(`button-${theme}`, {'disabled': disabled === true})
        
        return (
            <button type={type} className={buttonClass} onClick={onClickHandler} style={style} disabled={disabled}>
                {value}
            </button>
        )
    }
}

export default Button;