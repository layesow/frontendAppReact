import React from 'react'
import Header from '../../header-footer/Header';
import Sidebar from '../../header-footer/Sidebar';
import { apiUrl, token } from '../../header-footer/http'
//import useState et useEffect
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../header-footer/Footer';

import { toast } from 'react-toastify';


const Show = () => {

    //recuperation projects useState
        const [projects, setProjects] = React.useState([])
        //utilisation de fetch
        const fetchProjects = async() =>{
            const rest = await fetch(apiUrl+'projects',{
                'method' : 'GET',
                'headers' : {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
    
                }
            });
            const result = await rest.json();
            setProjects(result.data);
            //console.log(result);
            
        }

        // suppression de project 
            const deleteProject = async (id) =>{
                if(confirm("Etes vous sur de vouloir supprimer ce project ?")){
                    const rest = await fetch(apiUrl+'projects/'+id,{
                        'method' : 'DELETE',
                        'headers' : {
                            'Accept': 'application/json',
                            'Content-Type' : 'application/json',
                            'Authorization' : `Bearer ${token()}`
            
                        }
                    });
                    const result = await rest.json();
                    //setProjects(result.data);
                    //console.log(result);
        
                    if (result.status == true ) {
                        const newProjects = projects.filter(project => project.id != id)
                        setProjects(newProjects);
                        toast.success(result.message)
                    }else{
                        toast.error(result.message)
                    }
                }
                
            }

        useEffect(() => {
                fetchProjects();
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
                                    <h4 className="h5">Projects</h4>
                                    <Link to="/admin/projects/create" className='btn btn-primary'>Ajouter Projects</Link>
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
                                            projects && projects.map(project =>{
                                                return (
                                                    <tr key={project.id}>
                                                        <td>{project.id}</td>
                                                        <td>{project.title}</td>
                                                        <td>{project.slug}</td>
                                                        <td>
                                                            {
                                                                project.status === 1 ? 'Actif' : 'Inactif'
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link to={`/admin/projects/edit/${project.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                                            <Link onClick={ () => deleteProject(project.id)} to="#" className='btn btn-sm btn-secondary ms-2'>Sup</Link>
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