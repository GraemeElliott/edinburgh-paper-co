import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/epc-logo.png';
import './header.styles.scss';



const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img className="logo-img" src={logo} alt=""/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
      </div>
    </div>
  );

export default Header;