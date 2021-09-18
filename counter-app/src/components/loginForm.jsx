import React, { Component } from 'react';
import Joi from 'joi-browser';
import From from './common/form';

class LoginForm extends From {
    username = React.createRef();


    // componentDidMount(){
    //     this.username.current.focus();
    // };

    state = {
        data : {username : '', password : ''},
        errors : {}
    };
    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    };
    
    doSubmit = ()=>{
        // Call the server
        console.log("Submitted.");
    };
    

    
    render() { 
      

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {this.handleSubmit} >
            {this.renderInput('username', 'Username', true)}
            {this.renderInput('password', 'Password',  false, 'password')}

            {this.renderButton("Login")}
            
            </form>
        </div>


        );
    }
}
 
export default LoginForm;