import React, { Component } from 'react';

//could be converted to a structured function component

class Like extends Component {
    render() { 
        let classes = "fa fa-heart";
        if(! this.props.liked)
        classes += "-o"
        return ( 
            <i onClick = {this.props.onClick} 
            style = { {cursor : "pointer"} }
            class= {classes} aria-hidden = "true"></i>
         );

    }
}
 
export default Like;