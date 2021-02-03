import React from 'react';

export class Button extends React.Component{
    constructor(props){
        super(props)
        this.displayValue = this.displayValue.bind(this);
    }

    displayValue(){
        this.props.onClick(this.props.value);
    }

    render(){
        return (
            <button onClick={this.displayValue}>{this.props.value}</button>
        );
    }
}