import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import React from 'react'
import Hero from '../header-footer/Hero'

import BlogImg from '../../assets/images/construction3.jpg'


const Blogs = () => {
  return (
        <>
            <Header/>
                <main>
                    <Hero
                        preHeading='Blog' 
                        heading="Blogs" 
                        text="Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit." 
                    />
                    <section className="section-6 bg-light py-5">
                        <div className="container">
                            <div className="section-header text-center">
                                <span>
                                    Blog 
                                </span>
                                <h2>
                                    Lorem ipsum dolor sit amet.
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-4">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={BlogImg} alt="" className='w-100' />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="mb-3">
                                                <a href="#" className='title'>Titre blog</a>
                                            </div>
                                            <a href="#" className='btn btn-primary small'>Lire la suite</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={BlogImg} alt="" className='w-100' />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="mb-3">
                                                <a href="#" className='title'>Titre blog</a>
                                            </div>
                                            <a href="#" className='btn btn-primary small'>Lire la suite</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow border-0">
                                        <div className="card-img-top">
                                            <img src={BlogImg} alt="" className='w-100' />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="mb-3">
                                                <a href="#" className='title'>Titre blog</a>
                                            </div>
                                            <a href="#" className='btn btn-primary small'>Lire la suite</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
  )
}

export default Blogs