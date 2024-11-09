import React from 'react'
import Header from '../../header-footer/Header'
import Sidebar from '../../header-footer/Sidebar'
import Footer from '../../header-footer/Footer'
import { apiUrl, token } from '../../header-footer/http'
//import useState et useEffect
import { useState, useEffect } from 'react'


const Show = () => {
    //recuperation service useState
    const [services, setServices] = React.useState([])
    //utilisation de fetch
    const fetchServices = async() =>{
        const rest = await fetch(apiUrl+'services',{
            'method' : 'GET',
            'headers' : {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token()}`

            }
        });
        const result = await rest.json();
        setServices(result.data);
        //console.log(result);
        
    }
    useEffect(() => {
        fetchServices();
    }, []);
    
  return (
    <div>
        <Header/>
            <main>
                <div className="container my-5">
                <div className="row">
                    <div className='col-md-3'>
                        {/* side bar */}
                        <Sidebar/>
                    </div>
                    <div className='col-md-9'>
                        {/* main content */}
                        <div className="card shadow border-0">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between">
                                    <h4 className="h5">Service</h4>
                                    <a href="" className='btn btn-primary'>Ajouter service</a>
                                </div>
                                <hr />
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nom</th>
                                            <th>Slug</th>
                                            <th>Statut</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            services && services.map(service =>{
                                                return (
                                                    <tr>
                                                        <td>{service.id}</td>
                                                        <td>{service.title}</td>
                                                        <td>{service.slug}</td>
                                                        <td>
                                                            {
                                                                service.status === 1 ? 'Actif' : 'Inactif'
                                                            }
                                                        </td>
                                                        <td>
                                                            <a href="" className='btn btn-sm btn-primary'>Edit</a>
                                                            <a href="" className='btn btn-sm btn-secondary ms-2'>Sup</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        <Footer/>
    </div>
  )
}

export default Show