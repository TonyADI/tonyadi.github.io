import React, { useState } from 'react';
import { Tasklist } from '../Tasklist/Tasklist';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  
  const handleClick = () => {
    if(task){
      let incr = id + 1;
      setTasks([...tasks, incr + task])
      setId(incr)
    }
    else{
      alert('Error! Task cannot be empty.')
    }
  }

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleKeyPress = e => {
    if(e.which === 13){
      handleClick();
    }
  }

  const removeTask = task => {
    //const taskNo = this.state.tasks.indexOf(task);
    const newList = tasks.filter((i) => {return i !== task})
    setTasks(newList);
  }

  return (
      <div className="App">
      <h1>Todo List</h1>
      <div>
        <input type='text' placeholder='new task' value={task} 
        onKeyPress={handleKeyPress} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        <Tasklist tasks={tasks} onClick={removeTask} listNo='1'/>
        {tasks.length && <div>{tasks.length} tasks left to complete</div>}
      </div>
      </div>
    );
}


export default App;