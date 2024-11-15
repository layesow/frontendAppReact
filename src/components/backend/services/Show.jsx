import React from 'react'
import Header from '../../header-footer/Header'
import Sidebar from '../../header-footer/Sidebar'
import Footer from '../../header-footer/Footer'
import { apiUrl, token } from '../../header-footer/http'
//import useState et useEffect
import { useEffect } from 'react'
//import Link
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


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

    // suppression de service 
    const deleteService = async (id) =>{
        if(confirm("Etes vous sur de vouloir supprimer ce service ?")){
            const rest = await fetch(apiUrl+'services/'+id,{
                'method' : 'DELETE',
                'headers' : {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
    
                }
            });
            const result = await rest.json();
            //setServices(result.data);
            //console.log(result);

            if (result.status == true ) {
                const newServices = services.filter(service => service.id != id)
                setServices(newServices);
                toast.success(result.message)
            }else{
                toast.error(result.message)
            }
        }
        
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
                                    <Link to="/admin/services/create" className='btn btn-primary'>Ajouter service</Link>
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
                                                    <tr key={service.id}>
                                                        <td>{service.id}</td>
                                                        <td>{service.title}</td>
                                                        <td>{service.slug}</td>
                                                        <td>
                                                            {
                                                                service.status === 1 ? 'Actif' : 'Inactif'
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link to={`/admin/services/edit/${service.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                                            <Link onClick={ () => deleteService(service.id)} to="#" className='btn btn-sm btn-secondary ms-2'>Sup</Link>
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