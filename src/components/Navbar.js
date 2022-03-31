import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

const Navbar = () => {
    return (<div className='top-navbar'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li class="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Food">Food</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Travel">Travel</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/portfolio">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

    </div>);
};

export default Navbar;
