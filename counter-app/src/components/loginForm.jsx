import React, { Component } from 'react';

class LoginForm extends React.Component {
    username = React.createRef();


    // componentDidMount(){
    //     this.username.current.focus();
    // };

    state = {
        account : {username : {}, password : ''}
    };
    handleSubmit = e => {
        e.preventDefault();
        // call the server
    
        const username = this.username.current.value;
        console.log("Done " + username);

    };

    handleChange = e =>{
        const account = {...this.state.account};
        account.username = e.currntTarget.value;
        this.setState( {account} );
    };
    render() { 

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {this.handleSubmit} >
                <div className="form-group"><label htmlFor="username">Username</label>
                <input 
                onChange = {this.handleChange}
                value = {this.state.account.username} 
                autoFocus
                ref = {this.username}
                id="username"
                type="text"
                className="form-control"
                />
                </div>
                <div className="form-group"><label htmlFor="password">Password</label>
                <input
                 id="password"
                  type="text"
                   className="form-control"
                    />
                    </div>
            <button  className="btn btn-primary">Login</button>
            </form>
        </div>


        );
    }
}
 
export default LoginForm;