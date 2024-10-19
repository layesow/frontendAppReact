import React from 'react'



// import image about
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import ServiceImg from '../../assets/images/construction1.jpg'
import ProjeteImg from '../../assets/images/construction2.jpg'
import Icon1 from '../../assets/images/icon-1.svg'
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import AvatarImag from '../../assets/images/author-2.jpg'
import BlogImg from '../../assets/images/construction3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import About from '../header-footer/About';



const Home = () => {
  return (
    <>
        <Header />

        <main>
            <section className="section-1">
                <div className="hero d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="text-center">
                            <span>
                                Bienvenue sur mon site web
                            </span>
                            <h1>
                                Je suis un  <br /> 
                                développeur web
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="mt-3">
                                <a className='btn btn-primary large'>En savoir plus</a>
                                <a className='btn btn-secondary ms-2 large'>En savoir plus</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* about */}
            <About />

            {/* service */}
            <section className="section-3 bg-light py-5">
                <div className="container-fluid">
                    <div className="section-header text-center">
                        <span>
                            Nos services
                        </span>
                        <h2>
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className='w-100' />
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
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className='w-100' />
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
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className='w-100' />
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
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className='w-100' />
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

            {/* choose us */}
            <section className="section-4 py-5">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>
                            choose us 
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
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon1} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon2} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon3} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>
                                        Lorem ipsum
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* projet */}
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
                        <div className="col-md-3 col-lg-3">
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
                        <div className="col-md-3 col-lg-3">
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
                        <div className="col-md-3 col-lg-3">
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
                        <div className="col-md-3 col-lg-3">
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

            <section className="section-5 py-5">
                <div className="container">
                <div className="section-header text-center">
                    <span>
                        choose us 
                    </span>
                    <h2>
                        Lorem ipsum dolor sit amet.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                    >
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                </div>
                                <div className="content pt-4 pb-0">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis nemo obcaecati ipsum dolorum doloribus
                                    </p>
                                </div>
                                <hr />
                                <div className="d-flex meta">
                                    <div className="">
                                        <img src={AvatarImag} alt="" width={50} />
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">
                                            Laye sow
                                        </div>
                                        <div className="">
                                            Developpeur
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                </div>
                                <div className="content pt-4 pb-0">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis nemo obcaecati ipsum dolorum doloribus
                                    </p>
                                </div>
                                <hr />
                                <div className="d-flex meta">
                                    <div className="">
                                        <img src={AvatarImag} alt="" width={50} />
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">
                                            Laye sow
                                        </div>
                                        <div className="">
                                            Developpeur
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                </div>
                                <div className="content pt-4 pb-0">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis nemo obcaecati ipsum dolorum doloribus
                                    </p>
                                </div>
                                <hr />
                                <div className="d-flex meta">
                                    <div className="">
                                        <img src={AvatarImag} alt="" width={50} />
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">
                                            Laye sow
                                        </div>
                                        <div className="">
                                            Developpeur
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                </div>
                                <div className="content pt-4 pb-0">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis nemo obcaecati ipsum dolorum doloribus
                                    </p>
                                </div>
                                <hr />
                                <div className="d-flex meta">
                                    <div className="">
                                        <img src={AvatarImag} alt="" width={50} />
                                    </div>
                                    <div className="ps-3">
                                        <div className="name">
                                            Laye sow
                                        </div>
                                        <div className="">
                                            Developpeur
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
                </div>
            </section>

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

        <Footer />
    </>
  )
}

export default Home