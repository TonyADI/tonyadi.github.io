import React from 'react';
import './Rating.css'

export class Rating extends React.Component{
    constructor(props){
        super(props);
        this.rating = this.rating.bind(this)
    }

    rating(i){
       if(this.props.count - i == 0.5){
            return {background: 'linear-gradient(to right, rgb(219, 95, 95) 50%, rgb(206, 201, 201) 0%)'};
           }
       else if(this.props.count > i){
            return {backgroundColor: 'rgb(219, 95, 95)'};
       }
    }

    render(){
        return(
            <div>
                <div className='box' style={this.rating(0)}><span class="fa fa-star star"></span></div>
                <div className='box' style={this.rating(1)}><span class="fa fa-star star"></span></div>
                <div className='box' style={this.rating(2)}><span class="fa fa-star star"></span></div>
                <div className='box' style={this.rating(3)}><span class="fa fa-star star"></span></div>
                <div className='box' style={this.rating(4)}><span class="fa fa-star star"></span></div>
            </div>
        )
    }
}