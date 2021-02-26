import React from 'react';
import { Result } from '../Result/Result';
import { Keypad } from '../Keypad/Keypad';
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {result: ''};
      this.handleClick = this.handleClick.bind(this);
      this.calculate = this.calculate.bind(this);
      this.backspace = this.backspace.bind(this);
      this.clear = this.clear.bind(this);
    }

    calculate(){
      try {
        // eval is safe in this context because user input is constrained to numbers and expressions.
        const ans = String(eval(this.state.result))
        this.setState({result: ans})
      } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        }
      }
    }

    backspace(){
      const newResult = this.state.result.slice(0, -1);
      this.setState({result: newResult});
    }

    clear(){
      this.setState({result: ''})
    }

    handleClick(val){
      if(val === '='){
        this.calculate();
      }
      else if(val === 'CE'){
        this.clear();
      }
      else if(val === 'C'){
        this.backspace();
      }
      else{
        let oldResult = this.state.result;
        const newResult = oldResult += val;
        this.setState({result: newResult})
      }
    }

    render() {
      return (
        <div className="body">
          <h1>Basic Calculator</h1>
          <div className="calculator-body">
            <Result className="result" result={this.state.result}/>
            <Keypad onClick={this.handleClick} />
          </div>
        </div>
      );
  }
}

export default App;