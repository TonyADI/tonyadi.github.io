import React from 'react';
import './Choice.css';

const Choice = (props) => {
    const handleClick = () => {
        props.onClick(props.name);
    }

    return (
    <div style={{display: 'inline'}}>
        <button className="choice"onClick={handleClick}>{props.name}</button>
    </div>
    )
}

export default Choice;