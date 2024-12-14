import React, { useEffect, useState } from "react";
import ServiceImg from '../../assets/images/construction1.jpg'
import { apiUrl, fileUrl } from "./http";


const LatestServices = () => {
    const [services, setServices] = useState([])
    const fethchLatestServices= async () =>{
        const rest = await fetch(apiUrl+'get-latest-services?limit=4',{
            'method' : 'GET',

        });
        const result = await rest.json();
        //console.log(result)
        setServices(result.data);
    }

    useEffect(() => {
        fethchLatestServices();
    },[]);
    
  return (
    <section className="section-3 bg-light py-5">
        <div className="container-fluid">
        <div className="section-header text-center">
            <span>Nos services</span>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="row pt-4">
            {
                services && services.map(service => {
                    return (
                        <>
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="" className="w-100"/>
                                </div>

                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>{service.title}</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            {service.short_desc}
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
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
  );
};

export default LatestServices;
