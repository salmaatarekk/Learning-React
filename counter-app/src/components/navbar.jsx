import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Movies from './movies';
// Stateless Function Component

const NavBar = () =>{
    return (
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="/movies">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/customers">Customers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/rentals">Rentals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/login">Login</a>
        </li>
      </ul>

 );
      
    
}

/*
class NavBar extends Component {
    render() { 
        
    }
}*/
 
export default NavBar;