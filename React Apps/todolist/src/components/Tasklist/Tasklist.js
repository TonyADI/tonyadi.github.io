import React from 'react'
import { Task } from '../Task/Task'
import './Tasklist.css'

export class Tasklist extends React.Component{
    render(){
        return(
            <div>
                <h4>List {this.props.listNo}</h4>
                <div className='tasklist'>
                {this.props.tasks.map((task) => { return <Task task={task} taskInfo={task.slice(1)} taskID={task[0]} taskDone={task.done} 
                onClick={this.props.onClick}/> })}
                </div>
            </div>
        )
    }
}