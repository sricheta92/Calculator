import React , {Component}from 'react'
import Display from './Display'

class Calculator extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>My Calculator
          <div className="container-fluid">
            <Display />
          </div>
        </div>

    );
  }

}

export default Calculator;
