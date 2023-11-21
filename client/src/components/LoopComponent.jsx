import React from 'react';
class LoopComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:1,
                    name:"Tejendra Dangaura",
                },
                {
                    id:2,
                    name:"Dibesh Shresths",
                },
                {
                    id:3,
                    name:"Aaayush Niraula",
                },
            ],
        }
    }

    render(){
        return(
            <div>
                <h1>Item List</h1>
                <ul className='list-group'>
                    {
                        this.state.items.map((item)=>{
                            return <li key={item.id} className='list-group-item'>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default LoopComponent;