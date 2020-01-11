import React from 'react';
import {connect} from "react-redux";
import {example1Action} from "./action.js";

class Hello extends React.Component 
{
  fireAction = ()=>{
    debugger;
    this.props.dispatch(example1Action("Hello to this world"));
  }
  render(){
    console.log(this.props.ExampleData,"prop")
    return (
      <div>
      <button onClick={this.fireAction}>Say Hello</button>
      <p>{this.props.ExampleData}</p>
      </div>    )

  }
}

function mapStateToProps(state){
  console.log(state,"globalstate")
  let ExampleData = state.exampleReducer || {};
  return ExampleData
}
export default  connect(mapStateToProps,null)(Hello)