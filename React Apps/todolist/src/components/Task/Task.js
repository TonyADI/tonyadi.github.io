import React, { useState } from 'react';
import './Task.css';

export class Task extends React.Component{
    constructor(props){
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(){
        this.props.onClick(this.props.task)
    }

    render(){
        return (
            <div className='task'>{this.props.taskID} {this.props.taskInfo} <button>Done?</button> <button 
            onClick={this.removeTask}>x</button> </div>
        )
    }
}