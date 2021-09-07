import React, { Component } from 'react';

class LoginForm extends React.Component {
    render() { 
        return (
        <div>
            <h1>Login</h1>
            <form >
                <div className="form-group"><label htmlFor="username"></label>Username<input id="username" type="text" className="form-control" /></div>
                <div className="form-group"><label htmlFor="password"></label>Password<input id="password" type="text" className="form-control" /></div>
            <button className="btn btn-library">Login</button>
            </form>
        </div>


        );
    }
}
 
export default LoginForm;