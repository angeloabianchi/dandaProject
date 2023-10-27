import React, { useState, useEffect } from 'react';
import { initialFetch } from '../../Components/DataFetch/DataFetch';
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
                    const data = await initialFetch(type, projId);
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

    console.log(project);
    console.log(photos);


    return (
        <div className=''>
            porque n retorna aqui?
        </div>
    );
}

export default Project;