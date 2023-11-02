import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import DandaLogo from '../../static/img/DandaLogo500x500.png';
import linkedin from '../../static/img/linkedin.png';
import vimeo from '../../static/img/vimeo.png';
import email from '../../static/img/email.png';
import navBarBackground from '../../static/video/navbarBackground.mp4';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className='FooterContainer'>
            <div className='videoFooter'>
                <video className="video" preload="true" autoPlay loop muted>
                    <source src={navBarBackground} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='footerContent'>
                <div className='footerRight'>
                    <Link to={'/'} className='logoLinkFooter'>
                        <img className='logoImageFooter' src={DandaLogo} alt='Danda Logo' />
                    </Link>
                </div>
                <div className='footerCenter'>
                    <p>&#169;{year} - Danda </p>
                </div>
                <div className='footerLeft'>
                    <a href='#'><img src={linkedin} tag='Linkedin Icon' /></a>
                    <a href='#'><img src={vimeo} tag='Vimeo Icon' /></a>
                    <a href='#'><img src={email} tag='Email Icon' /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;