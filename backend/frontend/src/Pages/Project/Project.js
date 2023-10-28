import React, { useState, useEffect } from 'react';
import { dataFetch } from '../../Components/DataFetch/DataFetch';
import { useParams } from 'react-router-dom';


const Project = () => {

    const { id } = useParams();
    const projId = id;
    const [project, setProject] = useState();
    const [photos, setPhotos] = useState();
    const requests = ['project', 'photos'];

    useEffect(() => {
        const GetData = async () => {
            for (const type of requests) {
                try {
                    const data = await dataFetch(type, projId);
                    if (type === 'project') {
                        setProject(data);
                    } else {
                        setPhotos(data);
                    }
                } catch (error) {
                    console.error(`Error fetching data:`, error);
                }
            }

        }

        GetData();
    }, [projId]) 

    


    return (
        <div className='ProjectContainer'>
            {project && photos ? (
                <>
                    <div className='title'>{project.name}</div>
                    <div className='video'>{project.video}</div>
                    <div className='photoContainer'>
                        {photos && photos.map((photo) => (
                            <img className='photoImage' src={photo.url} alt='project image' />
                        ))}
                    </div>
                    <div className='photos'>a</div>
                </>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    );
}

export default Project;