import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import DandaLogo from '../../static/img/DandaLogo.png';
import navBarBackground from '../../static/video/navbarBackground.mp4';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='video'>
                <video className="video" preload="true" autoPlay loop muted>
                    <source src={navBarBackground} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='leftNavBar'>
                <Link className='NavBarLinks' to='/'><span>Home</span></Link>
                <Link className='NavBarLinks' to='/about'><span>About</span></Link>
                <Link className='NavBarLinks' to='/contacts'><span>Contacts</span></Link>
            </div>
            <div className='rightNavBar'>
                <Link to={'/'} className='logoLink'>
                    <img className='logoImage' src={DandaLogo} alt='Danda Logo' />
                </Link>
            </div>

        </div>
    );
}

export default NavBar;