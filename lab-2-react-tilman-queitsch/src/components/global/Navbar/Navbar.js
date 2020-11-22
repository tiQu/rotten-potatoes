import React from 'react';
import { NavItems } from './NavItems';
import './Navbar.css';

class Navbar extends React.Component{
    state = { clicked: false } 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-ract"></i></h1>
                <div ClassName="menu-icon" onClick={this.handleClick}>
                    <i classname={this.state.clicked ? 'bss bsi-times' : 'bss bsi-bars'}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title.toUpperCase()}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
  }

export default Navbar;