import React, { useEffect, useState } from "react";
import ProjeteImg from '../../assets/images/construction2.jpg'
import { apiUrl, fileUrl } from "./http";


const LatestProjects = () => {

    const [projects, setProjects] = useState([])
        const fethchLatestProjects= async () =>{
            const rest = await fetch(apiUrl+'get-latest-projects?limit=4',{
                'method' : 'GET',
            });
            const result = await rest.json();
            //console.log(result)
            if(result.status == true){
                setProjects(result.data);
            }
        }
    
        useEffect(() => {
            fethchLatestProjects();
        },[]);

  return (
    <section className="section-3 bg-light py-5">
        <div className="container-fluid">
            <div className="section-header text-center">
                <span>
                    Nos projets
                </span>
                <h2>
                    Lorem ipsum dolor sit amet.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="row pt-4">
            {
                projects && projects.map(project => {
                    return (
                        <>
                            <div className="col-md-3 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={`${fileUrl}uploads/projects/small/${project.image}`} alt="" className='w-100' />
                                    </div>

                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                            {project.short_desc}
                                            </p>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>
                                            En savoir plus
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default LatestProjects