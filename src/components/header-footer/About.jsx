import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'

function About() {
    return (
        <section className="section-2 py-5">
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} alt="" className='w-100' />
                    </div>

                    <div className="col-md-6">
                        <span>About us</span>
                        <h2>
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
