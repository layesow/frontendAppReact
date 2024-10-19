import React from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import Hero from '../header-footer/Hero'
import ProjeteImg from '../../assets/images/construction2.jpg'


const Projects = () => {
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
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjeteImg} alt="" className='w-100' />
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>
                                            Lorem ipsum
                                        </h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjeteImg} alt="" className='w-100' />
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>
                                            Lorem ipsum
                                        </h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjeteImg} alt="" className='w-100' />
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>
                                            Lorem ipsum
                                        </h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjeteImg} alt="" className='w-100' />
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>
                                            Lorem ipsum
                                        </h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjeteImg} alt="" className='w-100' />
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>
                                            Lorem ipsum
                                        </h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjeteImg} alt="" className='w-100' />
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>
                                            Lorem ipsum
                                        </h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary small'>
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </>
  )
}

export default Projects