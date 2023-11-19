import React from "react";
class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    
    
    // for the first time component output has been rendered
    componentDidMount(){
        console.log("Component Has been mounted");
        this.timerID = setInterval(() =>{
            this.tick();
        }, 1000);
    }

    // for the component un mounted/destroyed
    componentWillUnmount(){
        console.log("Component has been destroyed");
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>Example Of The Life Cycle Of React { this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default LifeCycle;