import React, { useEffect, useState } from 'react';
import './Home.css';
import { dataFetch } from '../../Components/DataFetch/DataFetch';
import { Link } from 'react-router-dom';
/* import foto2 from '../../static/img/foto2.jpg'
import foto3 from '../../static/img/foto3.jpg' */


const Home = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        const GetData = async () => {
            try {
                const data = await dataFetch('initial');
                setProjects(data);
            } catch (error) {
                console.error(`Error fetching data:`, error);
            }
        }

        GetData();
    }, [])
    

    return (
        <div class='container text-center' style={{maxWidth: '100%'}}>
            <div class='row row-cols-3'>
                {projects && projects.map((project) => (
                    <Link to={"/project/" + project.id} className="link">
                        <div class='col'
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '400px',
                        }}>
                            <div class='d-flex' className='homeTitle'>
                                <span>{project.name}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Home;