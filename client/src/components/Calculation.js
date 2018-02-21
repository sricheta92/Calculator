import React, {Component} from 'react'

class Calculation extends Component{

render(){

  return(
    <div className  = "row">
      <input type = "text" value = {this.props.value} readOnly />
    </div>
  );
}

}

export default Calculation
