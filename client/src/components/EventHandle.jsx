import React from "react";
class EventHandle extends React.Component{
    constructor(props){
        super(props); 
        this.state = {is_toggle:true};
    }
    handleClick = (val)=> {
        alert("Hello "+ val);
        this.setState((prevState) => ({
            is_toggle: !prevState.is_toggle
        }));
    }
    render(){
         return (
            <button onClick={(e)=>this.handleClick("Tezz")}>
                {this.state.is_toggle ? 'ON' : 'OFF'}
            </button>
         )
    }
}

export default EventHandle;