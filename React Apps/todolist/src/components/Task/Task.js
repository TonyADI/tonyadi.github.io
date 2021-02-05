import React from 'react';
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
            <div className='task-container'><span className='task'>{this.props.taskInfo}</span><button 
            onClick={this.removeTask} className='remove'><i className="
            fa fa-trash icon"></i></button> </div>
        )
    }
}