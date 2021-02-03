import React, { useState } from 'react';

const Item = (props) => {
    const handleClick = () => {
        props.onClick(props.name);
    }

    return (
    <div style={{display: 'inline'}}>
        <button onClick={handleClick}>{props.name}</button>
    </div>
    )
}

export default Item;