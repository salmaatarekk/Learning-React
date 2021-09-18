import React, { Component } from 'react';
import From from './common/form';
import Joi from 'joi-browser'


class Register extends From {
    state = {
        data : {username : "", password : "", name: ""},
        errors : {}
    }
    schema = {
        username : Joi.string().required().email().label('Username'),
        password : Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    }
    doSubmit = () =>{

        // Call the server
        console.log('Registered');
    };
    render() { 
        return (

            <div>
                <h1>Register</h1>
                <form onSubmit = {this.handleSubmit}>
                {this.renderInput('username', 'Username', true)}
                {this.renderInput('password', 'Password', false, 'password')}
                {this.renderInput('name', 'Name', false)}

                {this.renderButton("Register")}
                </form>   
            </div>

        ) ;
    }
}
 
export default Register;