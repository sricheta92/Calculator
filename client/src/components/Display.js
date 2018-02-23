import React, {Component} from 'react'
import Calculation from './Calculation'

class Display extends Component{


  render(){
     return(
       <div className = "row" >
        <div className="col-sm-offset-12 col-md-offset-12 col-lg-offset-12 col-sm-12 col-md-12 col-lg-12 ">
           <Calculation className = "calc-expr" value = {this.props.expression} />
           <Calculation className = "calc-output" value = {this.props.output} />
         </div>
        </div>
     );

  }

}
export default Display;
