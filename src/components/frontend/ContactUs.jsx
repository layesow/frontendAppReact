import React from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import Hero from '../header-footer/Hero'


const ContactUs = () => {
  return (
    <>
    <Header/>
        <main>
            <Hero
                preHeading='contact' 
                heading="contact us" 
                text="Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit." 
            />
            <section className="section-9 py-5">
              <div className="container">
              <div className="section-header text-center">
                    <h2>
                        Contact us
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className="row mt-5">
                  <div className="col-md-3">
                    <div className="card shadow border-0 mb-3">
                      <div className="card-body p-4">
                        <h3>Call us</h3>
                        <div className="">
                          <a href=""> 
                            <i className="fa fa-phone"></i>
                            <span> +1234567890</span>
                          </a>
                        </div>
                        <div className="">
                          <a href=""> 
                            <i className="fa fa-phone"></i>
                            <span> +1234567890</span>
                          </a>
                        </div>

                        <h3 className='mt-3'>Email</h3>
                        <div className="">
                          <a href="">
                            <i className="fa fa-envelope"></i>
                            <span> info@example.com</span>
                          </a>
                        </div>
                        <div className="">
                          <a href="">
                            <i className="fa fa-envelope"></i>
                            <span> info@example.com</span>
                          </a>
                        </div>
                        
                        <h3 className='mt-3'>Address</h3>
                        <p>
                          <i className="fa fa-map-marker"></i>
                          <span> 123 Main St, Anytown, USA</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-9">
                    <div className="card shadow border-0 mb-3">
                     <div className="card-bady p-5">
                      <form action="">
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your name" />
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-group">
                                <label htmlFor="name">Phone</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your phone" />
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-group">
                                <label htmlFor="name">Subjet</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your Subjet" />
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="form-group">
                              <label htmlFor="name">Message</label>
                              <textarea className="form-control form-control-lg" placeholder="Enter your message" rows={3}></textarea>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                        </form>
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

export default ContactUs