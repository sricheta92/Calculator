import React, {Component} from 'react'

class Calculation extends Component{

render(){

  return(

        <input className = "cols-sm-10 col-xs-10 col-md-10" type = "text" value = {this.props.value} readOnly  />


  );
}

}

export default Calculation
