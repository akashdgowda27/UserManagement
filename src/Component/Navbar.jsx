import React from 'react';
import '../styles/navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}


const NavBar = () => {
    let loc = useLocation();
    let path = loc.pathname;

    let bool = path.startsWith('/adminportal');

    return (
        <div className="navbar">
            <ul>
               <li> <NavLink to="/adminport"><i className="fas fa-home" aria-hidden="true"></i></NavLink></li>
               <li> <NavLink to="/adminport"><i className="fas fa-info-circle" aria-hidden="true"></i></NavLink></li>
               <li> <NavLink to="/adminport"><i className="fas fa-cogs" aria-hidden="true"></i></NavLink></li>
               <li><NavLink to="/adminport"><i className="fas fa-envelope" aria-hidden="true"></i></NavLink></li>
               <li><NavLink to="/adminport"><i className="fas fa-lock" aria-hidden="true"></i></NavLink></li>              
            </ul>
            <button><NavLink to='/'>Logout</NavLink></button>
        </div>
    );
};

export default NavBar;
