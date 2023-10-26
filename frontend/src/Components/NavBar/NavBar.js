import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import DandaLogo from '../../static/img/DandaLogo.png'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='leftNavBar'>
                <Link to={'/'} className='logoLink'>
                    <img className='logoImage' src={DandaLogo} alt='Danda Logo' />
                </Link>
            </div>
            <div className='rightNavBar'>
                <Link className='NavBarLinks' to='/'><span>Home</span></Link>
                <Link className='NavBarLinks' to='/about'><span>About</span></Link>
                <Link className='NavBarLinks' to='/contacts'><span>Contacts</span></Link>
            </div>

        </div>
    );
}

export default NavBar;