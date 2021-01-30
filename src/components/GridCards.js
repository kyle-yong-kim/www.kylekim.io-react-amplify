import React, { Component, useState } from 'react';
import './GridCards.scss';

export class GridCards extends React.Component {

    render() {

        function onItemClick(e) {
            return (e.target.value);
        }

        const {
            list,
            style,
            theme,
            col,
            row,
            onClickHandler,
            attachUniqueID
        } = this.props;

        const gridCardClass = `grid-card-${theme}`;

        function getOnClickHandler(item) {
            // console.log(onClickHandler);
            if (onClickHandler) {
                return () => {onClickHandler(item)}
            }
            return ()=>{}
        } 
        
        if (col) {
            return (
                <div className={`grid-container-${col}col`} style={style}>

                {list.map(function (item, i) {
                    return (
                        <p id={ (attachUniqueID) ? `${item}-filter` : null } className={`${gridCardClass}`} onClick={
                            getOnClickHandler({itemName:item, targetID:`${item}-filter`})}>
                            {item}
                        </p>)
                })}

            </div>
            )
        }
        else {
            return (
                <div className="grid-container" style={style}>

                    {list.map(function (item, i) {
                        return (<p id={ (attachUniqueID) ? `${item}-filter` : null } className={`${gridCardClass}`} 
                        onClick={getOnClickHandler({itemName:item, targetID:`${item}-filter`})}>{item}</p>)
                    })}

                </div>
            )
        }
    }
}

export default GridCards;