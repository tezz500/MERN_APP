import React from "react";
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login:false,
            email:'',
            password:'',
            errors:[],
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.email == 'tejendra@thulo.com' &&  this.state.password == 'password'){
            console.log("Loged In");
        }
    }
    render(){
        return(
            <div className="card mt-5">
                <div className="card-header">Form Example</div>
                { (this.state.email !== null && this.state.email !== '' && this.state.email !== undefined) ? 
                    <p>
                        This is email: {this.state.email}
                    </p> 
                    : ''
                }
                <br />

                { this.state.password !== null && this.state.password !== '' && this.state.password !== undefined ? 
                    <p>
                        This is Password: {this.state.password}
                    </p> 
                    : ''
                }

                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Email:</label>
                                <input type="email" className="form-control form-control-sm" onKeyUp={(e)=> this.setState(()=>({ email : e.target.value }))} onChange={(e)=> this.setState(()=>({ email : e.target.value }))}/>
                            </div>
                            { this.state.errors['email'] ? <span className="text-danger">{ this.state.errors['email']} </span> : ''}
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Password:</label>
                                <input type="password" className="form-control form-control-sm" onKeyUp={(e)=>this.setState(()=>({password : e.target.value}))} onChange={(e)=>this.setState(()=>({password : e.target.value}))}/>
                            </div>
                            { this.state.errors['password'] ? <span className="text-danger">{ this.state.errors['password'] }</span> : ''}
                        </div>

                        <div className="col-md-12 mt-2">
                            <button type="submit" className="btn btn-sm btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormComponent;