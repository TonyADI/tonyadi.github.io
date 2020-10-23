import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './Block.css';

export class Block extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick} className="valign">{this.props.value}
            </button>
        )
    }
}

const example = () => {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('apple');
    const [toDos, setTodos] = useState([{text: 'Learn Hooks'}]);

    useEffect(()=>{
        document.title = `Clicked ${count} times`
    })
    useEffect(()=>{
        ChatAPI.subscribe(id, status)
        return (() =>{
            ChatAPI.unsubscribe(id, status)
        })
    }, [id])

    return(
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}></button>
        </div>
    )

}

const Example = () =>{
    const [name, setName] = useState('')

    return (
        <div>
            <p>Input smt here</p>
            <p>Name: </p><input></input>
            <h1>Hello {name}</h1>
        </div>
    );
}