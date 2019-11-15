import React, {Component} from 'react';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';
import uuid from 'uuid/v4';

class Navbar extends Component {
    
    render(){
        const links = this.props.sites.map(link => {
            let id = uuid();
            return <li className="nav-item" key={id}><NavLink to={link.toLowerCase().replace(/\s/g, '')} className="item">{link}</NavLink></li>})
        
        return (
            <nav className="App-navbar navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0  mx-auto text-center">
                    {links}
                </ul>
            </nav>
        );
    }
}

export default Navbar;