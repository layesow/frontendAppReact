import React, { useEffect, useState } from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import Hero from '../header-footer/Hero'
import ProjeteImg from '../../assets/images/construction2.jpg'
import { apiUrl, fileUrl } from '../header-footer/http'



const Projects = () => {
    const [projects, setProjects] = useState([])
    const fethchProjects= async () =>{
        const rest = await fetch(apiUrl+'get-projects',{
            'method' : 'GET',
        });
        const result = await rest.json();
        //console.log(result)
        if(result.status == true){
            setProjects(result.data);
        }
    }

    useEffect(() => {
        fethchProjects();
    },[]);

  return (
        <>
            <Header />
                <main>
                    <Hero
                        preHeading='Projet' 
                        heading="Mes projets" 
                        text="Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit." 
                    />
                </main>
                {/* projet */}
            <section className="section-3 bg-light py-5">
                <div className="container">
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
                                        <div className="col-md-4 col-lg-4">
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
            <Footer />
        </>
  )
}

export default Projects