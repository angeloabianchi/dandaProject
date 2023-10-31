import React, { useEffect, useState } from 'react';
import './Home.css';
import { dataFetch } from '../../Components/DataFetch/DataFetch';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';


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

        setTimeout (async () => {
            await GetData();
        }, 1000);
        
    }, [])
    

    return (
        <div class='container text-center' className='homePage' style={{maxWidth: '100%'}}>
            {!projects ? (
                <div><Loading /></div>
            ) : (
                <div className='homeContent'>
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
                                    <div class='' className='homeTitle'>
                                        <h1>{project.name}</h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                
            )}


        </div>
    );
}

export default Home;