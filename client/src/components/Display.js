import React, {Component} from 'react'
import Calculation from './Calculation'

class Display extends Component{

  render(){
     return(
       <div>
         <Calculation value = {this.props.expression}/>
         <Calculation value = {this.props.output}/>
       </div>
     );

  }

}
export default Display
