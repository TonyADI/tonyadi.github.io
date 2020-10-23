import React from 'react';
import { Block } from '../Block/Block';
import './Board.css'

export class Board extends React.Component{
    render(){
        return(
            <div className="valign">
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <br/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <br/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
                <Block value={this.props.value} onClick={this.props.onClick}/>
            </div>
        )
    }
}