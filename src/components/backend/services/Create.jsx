import React, { useState, useRef, useMemo } from 'react';
import Footer from '../../header-footer/Footer'
import Sidebar from '../../header-footer/Sidebar'
import Header from '../../header-footer/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../header-footer/http'
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';






// eslint-disable-next-line react/prop-types
const Create = ({placeholder}) => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
	const [isDisable, setIsDisable] = useState(false);
	const [imageId, setImageId] = useState(null);

    const config = useMemo(() => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: placeholder || 'Content'
        }),
        [placeholder]
    );

    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        watch,
        formState: { errors },
      } = useForm()

      //navigation
      const navigate = useNavigate()

    const onSubmit = async (data) => {
        const newData = { ...data, "content":content, "imageId":imageId}

        const rest = await fetch(apiUrl+'services',{
            'method' : 'POST',
            'headers' : {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            'body' : JSON.stringify(newData)
        });
        const result = await rest.json();
        //rediriger vers la page service
        if(result.status== true){
            toast.success(result.message)
            navigate('/admin/services')
        }else{
            toast.erreur(result.message)
        }
    }

    //handleFile
    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);

         await fetch(apiUrl+'temp-images',{
            'method' : 'POST',
            'headers' : {
                'Accept': 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            'body' : formData
        })
        .then(response=>response.json())
        .then(result =>{
            if (result.status == false) {
                toast.error(result.errors.image[0])
            }else{
                setImageId(result.data.id)
            }
        })
    }
    

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
                                    <h4 className="h5">Service/create</h4>
                                    <Link to="/admin/services" className='btn btn-primary'>Retour</Link>
                                </div>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Nom du service</label>
                                        <input 
                                        placeholder='Titre du service'
                                            {
                                                ...register("title", {
                                                    required: "Le nom est requis",
                                                })
                                            }
                                        type="text" className={`form-control ${errors.title && 'is-invalid'}`} />
                                        {
                                            errors.title && <p className="text-danger">{errors.title?.message}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Slug</label>
                                        <input 
                                        placeholder='slug'
                                        {
                                            ...register("slug", {
                                                required: "Le slug est requis",
                                            })
                                        }
                                        type="text" className={`form-control ${errors.slug && 'is-invalid'}`} />
                                        {
                                            errors.slug && <p className="text-danger">{errors.slug?.message}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Sort description</label>
                                        <textarea 
                                        placeholder='Sort description'
                                        {
                                            ...register("short_desc")
                                        }
                                        className="form-control" rows="2"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Description</label>
                                        {/* <textarea
                                        placeholder='Description'
                                        {
                                            ...register("content")
                                        }
                                         className="form-control" rows="3"></textarea> */}
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            // eslint-disable-next-line no-unused-vars
                                            onChange={newContent => {}}
                                        />
                                    </div>
                                    {/* pour la gestion des image */}
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Image</label>
                                        <input type="file"
                                        onChange={handleFile}
                                            className="form-control"
                                            />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Status</label>
                                        <select className="form-select"
                                        {
                                            ...register("status")
                                        }
                                        >
                                            <option value="1">Actif</option>
                                            <option value="0">Inactif</option>
                                        </select>
                                    </div>
                                    <button disabled={isDisable} className="btn btn-primary">Enregistrer</button>
                                    </form>
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

export default Create