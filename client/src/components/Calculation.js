import React, {Component} from 'react'

class Calculation extends Component{
  constructor(props){
    super(props);
    this.handleMaxLength = this.handleMaxLength.bind(this);
  }

handleMaxLength(event){
  console.log(event.target.value);
    if(event.target.value.length>8){
      event.preventDefault();
    }

}
render(){

  return(

        <input className = " cols-sm-8 col-xs-8 col-md-8 calc" type = "text" onChange={ this.handleMaxLength}   maxLength="9" value = {this.props.value} readOnly  />


  );
}

}

export default Calculation;
