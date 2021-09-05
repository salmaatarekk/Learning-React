import React from 'react';
import { Link } from 'react-router-dom';
// Stateless Function Component

const NavBar = () =>{
    return (
//         <nav className="navbar navbar-light bg-light">
//      <a className="navbar-brand" href="#">Navbar
//      <span className="badge badge-pill badge-secondary">
//          {totalCounters}
         
//          </span>
//      </a>
//  </nav> );
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/posts/2018/06">Posts</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    );
}

/*
class NavBar extends Component {
    render() { 
        
    }
}*/
 
export default NavBar;