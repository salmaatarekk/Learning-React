import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Stateless Function Component

const NavBar = () =>{
    return (
    <nav classname = "navbar navbar-expand-lg navbar-light bg-light" >
        <Link className="navbar-brand" to="/" >Vidly</Link>
        <button className="navbar-toggler" 
        type="button"
         data-toggle="collapse"
         data-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup"
         aria-expanded="false"
         aria-label="Toggle navigation"
         >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className ="navbar-nav" >
         <NavLink className="nav-item nav-link" to="/movies" >Movies</NavLink>
         <NavLink className="nav-item nav-link" to="/customers" >Customers</NavLink>
         <NavLink className="nav-item nav-link" to="/rentals" >Renatals</NavLink>
        </div>
        </div>


    </nav>

 );
      
    
}

/*
class NavBar extends Component {
    render() { 
        
    }
}*/
 
export default NavBar;