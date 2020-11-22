import React from 'react';
import Navbar from '../Navbar/Navbar'
// import { FaSearch } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';

class Header extends React.Component{
    render(){
        return (
            <header>
                <Navbar />
            </header>
        );
    }
  }

export default Header;