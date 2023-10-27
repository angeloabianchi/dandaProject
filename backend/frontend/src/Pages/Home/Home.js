import React from 'react';
import './Home.css';
import foto1 from '../../static/img/foto1.jpg'
import foto2 from '../../static/img/foto2.jpg'
import foto3 from '../../static/img/foto3.jpg'
import foto4 from '../../static/img/foto4.jpg'
import foto5 from '../../static/img/foto5.jpg'
import foto6 from '../../static/img/foto6.jpg'
import foto7 from '../../static/img/foto7.jpg'
import foto8 from '../../static/img/foto8.jpg'
import foto9 from '../../static/img/foto9.jpg'

const Home = () => {
    return (
        <div className='HomeContainer'>
            <div className='ImageContainer'><img className='projectImage' src={foto1} alt='project image' /></div>
            <div className='ImageContainer'><img className='projectImage' src={foto2} alt='project image' /></div>
            <div className='ImageContainer'><img className='projectImage' src={foto3} alt='project image' /></div>
        </div>
    );
}

export default Home;