import React from "react";

const getValue = ()=>{
    return "Welcome";
}

class App1 extends React.Component{
  render(){
    return <h1>First App {getValue()} {this.props.number}</h1>;
  }
}

class App2 extends React.Component{
  render(){
    return <h1>Second App {getValue()} {this.props.name}</h1>;
  }
}



// if we sent in object any props, that can be modify
const App3 = (props)=>{
  props.account.total - props.account.debit;
  return (
    <div>
      <h1>Third App {getValue()} {props.account.total} {props.account.debit}</h1>
      <h1>Third App Result {props.account.total - props.account.debit}</h1>
    </div>
  );
}
export {App1, App2, App3};