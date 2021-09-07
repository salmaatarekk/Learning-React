import { object } from 'prop-types';
import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends React.Component {
    username = React.createRef();


    // componentDidMount(){
    //     this.username.current.focus();
    // };

    state = {
        account : {username : "", password : ''},
        errors : {}
    };
    validate = () => {
    const errors = {};
    const {account} = this.state;

        if(account.username.trim() === '')
         errors.username = 'Username is required.';

         if(account.password.trim() === '')
         errors.password = 'Password is required.'; 
        

        return (Object.keys(errors).length === 0 ? null : errors);
    };
    handleSubmit = e => {
        e.preventDefault();
        // call the server
        const errors = this.validate;
        console.log(errors);
        this.setState( {errors : errors || {} });
        if(errors)
            return;
        const username = this.username.current.value;
        console.log("Done " + username);

    };

    handleChange = ({currntTarget : input}) =>{

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState( {account} );
    };
    render() { 
        const {account, errors} = this.state;

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {this.handleSubmit} >
             <Input
            name = "username"
            value = {account.username}
            label = "Username"
            onChange = {this.handleChange} 
            autoFocus = {true} 
            error = {errors.username}
            />  
             <Input
              name = "password" 
              value = {account.password} 
              label = "Password" 
              onChange = {this.handleChange} 
              autoFocus = {false} 
              error ={errors.password} 
              />
            
            <button  className="btn btn-primary">Login</button>
            </form>
        </div>


        );
    }
}
 
export default LoginForm;