import React from 'react';
import { Rating } from '../Rating/Rating'
import './Business.css';

export class Business extends React.Component{
    render(){
        return(
            <div className="business-container"> 
                <div>
                    <img src={this.props.businesspic} alt='' className="image"></img>
                </div>
                <div className="business-details">
                    <div><h4 className="business-name">{this.props.businessname}</h4></div> 
                    <div>{this.props.businessrating} {this.props.businessrcount} review
                    {this.props.businessrcount != 1 ? 's': ''}</div>
                    <div>{this.props.businesstitle}</div>
                    <div>{this.props.businessloc}</div>
                    <div><Rating count={this.props.businessrating}/></div>
                </div>
            </div>
        )
    }
}