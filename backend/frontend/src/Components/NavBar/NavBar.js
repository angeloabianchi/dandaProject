import React from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import DandaLogo from '../../static/img/DandaLogo500x500.png';
import navBarBackground from '../../static/video/navbarBackground.mp4';

const NavBar = () => {

    const location = useLocation();

    return (
        <div className='NavBar'>
            <div className='videoNavBar'>
                <video className="video" preload="true" autoPlay loop muted>
                    <source src={navBarBackground} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='buttonsNavBar'>
                <div className='leftNavBar'>
                    <Link className={`NavBarLinks ${location.pathname === '/' ? 'selected' : ''}`} to='/'><span>Home</span></Link>
                    <Link className={`NavBarLinks ${location.pathname === '/about' ? 'selected' : ''}`} to='/about'><span>About</span></Link>
                    <Link className={`NavBarLinks ${location.pathname === '/contacts' ? 'selected' : ''}`} to='/contacts'><span>Contacts</span></Link>
                </div>
                <div className='rightNavBar'>
                    <Link to={'/'} className='logoLink'>
                        <img className='logoImage' src={DandaLogo} alt='Danda Logo' />
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default NavBar;