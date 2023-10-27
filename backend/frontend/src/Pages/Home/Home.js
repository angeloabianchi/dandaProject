import React, { useEffect, useState } from 'react';
import './Home.css';
import { initialFetch } from '../../Components/DataFetch/DataFetch';
import { Link } from 'react-router-dom';
import foto1 from '../../static/img/foto1.jpg'
/* import foto2 from '../../static/img/foto2.jpg'
import foto3 from '../../static/img/foto3.jpg' */


const Home = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        const GetData = async () => {
            try {
                const data = await initialFetch('initial');
                setProjects(data);
            } catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }

        GetData();
    }, []) 

    
/*     if(projects) {
        console.log(projects[0].projectphotos_set);
    } */
    

    return (
        <div className='HomeContainer'>
            {projects && projects.map((project) => (
                <Link to={"/project/" + project.id} className="link">
                    <div className='ImageContainer'>
                        <img className='projectImage' src={project.image} alt='project image' />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Home;