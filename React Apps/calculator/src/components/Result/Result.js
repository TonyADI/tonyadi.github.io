import React from 'react';
import './Result.css'

export class Result extends React.Component {
    render(){
        return (
            <div>
                <input className="result" value={this.props.result} disabled></input>
            </div>
        );
    }
}