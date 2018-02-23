import React , {Component} from 'react';
import Display from './Display';
import axios from 'axios'


class Calculator extends Component{



  constructor(props){
    super(props);
    this.state={
      expression : '',
      operators :['+','/','*','%','-'],
      operatorsWithoutMinus : ['+','/','*','%'],
      numbers : ['1','2','3','4','5','6','7','8','9','0'],
      output :'0'
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e, val){
    let operators = this.state.operators;
    let numbers = this.state.numbers;
    let operatorsWithoutMinus = this.state.operatorsWithoutMinus;
    let expr = this.state.expression;
    var lastChar = expr.substr(expr.length - 1);
    if(operators.includes(val) &&  operators.includes(lastChar)){
      expr = expr.slice(0, -1);
    }
    if(expr.length ===1  && numbers.includes(val) &&  operatorsWithoutMinus.includes(lastChar)){
      expr = expr.slice(0, -1);
    }
    if(val === '='){
        if(operators.includes(lastChar)){
            expr = expr.slice(0, -1);
        }

        this.parseExpression(expr);
        return;
    }
    if(val.toUpperCase() === 'C'){
      this.setState({
          expression : '',
          output :'0'
      })
      return;
    }
    this.setState({
      expression : expr+val +''
    });
  }


  parseExpression(expr){

    console.log(expr)
    let count = 0;
    let subExprNum1='';
    let subExprNum2='';
        if(expr.charAt(count) === '-'){
          subExprNum1= subExprNum1+expr.charAt(count);
          count++;
        }
        while(count<expr.length && (!isNaN(expr.charAt(count)) || expr.charAt(count) === '.')){
          subExprNum1 = subExprNum1 +  expr.charAt(count);
          count++;
        }
        let operand = expr.charAt(count);
        operand = operand.replace("/", "d");
        count++;
        while(count<expr.length && (!isNaN(expr.charAt(count)) || expr.charAt(count) === '.')){
          subExprNum2 = subExprNum2 + expr.charAt(count) ;
          count++;
        }


       this.callServer(subExprNum1, subExprNum2, operand, count, expr);


  }


  callServer(a,b,op,count,expr) {
    let self = this;
    axios.get("http://localhost:5000/calculator/"+op+"/"+a+"/"+b)
    .then(function(response){
       let res =  response.data.output;
       expr = expr.substring(count);
       if(expr.length>0){
         expr = res+ expr;
         self.parseExpression(expr);
       }else{
         self.setState({
           output : res
         })
       }
    }).catch(function(error){
      console.log("error");
    });
}
  render(){
    console.log(this.state);

    return(
        <div className = "content"> <h1 className ="heading">My Calculator </h1>
          <div id = "calculator" className="well  container-fluid ">
            <Display expression = {this.state.expression} output = {this.state.output}/>
            <div className="row">
                   <div className="col-sm-offset-12 col-md-offset-12 col-lg-offset-12 col-sm-12 col-md-12 col-lg-12">
                       <button type="button" className="cols-sm-4 col-xs-4 col-md-4 btn-lg btn-light btn-clear" onClick={(e) => this.handleClick(e, 'C')}>C</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-warning" onClick={(e) => this.handleClick(e, '+')}>+</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-warning" onClick={(e) => this.handleClick(e, '-')}>-</button>

                   </div>
            </div>
            <div className = "row">
                   <div className="col-sm-offset-12 col-md-offset-12 col-lg-offset-12 col-sm-12 col-md-12 col-lg-12">
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark"  onClick={(e) => this.handleClick(e, '1')}>1</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark"  onClick={(e) => this.handleClick(e, '2')}>2</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark"  onClick={(e) => this.handleClick(e, '3')}>3</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-warning"  onClick={(e) => this.handleClick(e, '/')} >/</button>
                    </div>
            </div>
            <div className = "row">
                   <div className="col-sm-offset-12 col-md-offset-12 col-lg-offset-12 col-sm-12 col-md-12 col-lg-12">
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '4')}>4</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '5')}>5</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '6')}>6</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-warning" onClick={(e) => this.handleClick(e, '*')}>*</button>
                    </div>
            </div>
            <div className = "row">
                   <div className="col-sm-offset-12 col-md-offset-12 col-lg-offset-12 col-sm-12 col-md-12 col-lg-12">
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '7')}>7</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '8')}>8</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '9')}>9</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-warning" onClick={(e) => this.handleClick(e, '%')}>%</button>

                   </div>
            </div>
            <div className = "row">
                   <div className="col-sm-offset-12 col-md-offset-12 col-lg-offset-12 col-sm-12 col-md-12 col-lg-12">
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '.')}>.</button>
                       <button type="button" className="cols-sm-2 col-xs-2 col-md-2 btn-lg btn-dark" onClick={(e) => this.handleClick(e, '0')}>0</button>
                       <button type="button" className="cols-sm-4 col-xs-4 col-md-4 btn-lg btn-warning" onClick={(e) => this.handleClick(e, '=')}>=</button>
                     </div>
            </div>
          </div>
        </div>

    );
  }

}

export default Calculator;
