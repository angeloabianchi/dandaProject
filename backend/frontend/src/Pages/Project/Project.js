import React, { useState, useEffect } from 'react';
import './Project.css';
import { dataFetch } from '../../Components/DataFetch/DataFetch';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';


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

        setTimeout (async () => {
            await GetData();
        }, 1000);

        
    }, [projId]) 

    /* console.log(project)
    console.log(photos) */


    return (
        <div className='ProjectContainer'>
            {project && photos ? (
                <>
                <div className='project'>
                    <h1 className='title'>{project.name}</h1>
                    <div className='projectVideo' class="ratio ratio-16x9">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${project.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
                    </div>
                    <div className='photoContainer'>
                        <div id="carouselFade" class="carousel slide carousel-fade">
                            <div class="carousel-inner">
                                {photos && photos.map((photo, index) => (
                                    <div class={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                        <img src={photo.url} class="d-block img-fluid" className='photoImage' alt="project image" />
                                    </div>
                                ))}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <div><Loading /></div>
            )}

        </div>
    );
}

export default Project;