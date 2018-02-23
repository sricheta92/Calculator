import React, {Component} from 'react'
import Calculation from './Calculation'

class Display extends Component{

constructor(){
  super();
  this.state = {
    output : '0',
  //  expression :'0'
  }
}

  render(){
     return(
       <div className = "row" >
        <div className="col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-sm-4 col-md-4 col-lg-4">
           <Calculation value = {this.props.expression} />
           <Calculation value = {this.props.output} />
         </div>
        </div>
     );

  }

}
export default Display
