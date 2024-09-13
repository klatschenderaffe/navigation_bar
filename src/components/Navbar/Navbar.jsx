import React from 'react';
import Logo from '../../assets/bake_a_boil_logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='Logo of Bake and Boil' />
      </div>
      <ul>
        <li>
          <Link to={'/'} className='link'>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/recipes'} className='link'>
            Recipes
          </Link>
        </li>
        <li>
          <Link to={'/aboutus'}>About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
