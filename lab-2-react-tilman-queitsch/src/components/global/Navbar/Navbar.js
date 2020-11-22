import React from 'react';
import { NavItems } from './NavItems'

class Navbar extends React.Component{
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-ract"></i></h1>
                <div ClassName="menu-icon">

                </div>
                <ul>
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