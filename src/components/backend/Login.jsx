import React from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'

import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    //navigate
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        //console.log(data)
        //utilise const fetch 
        const res= await fetch('http://127.0.0.1:8000/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
        });
        const result = await res.json();
        //condition pour toastify status false
        if(result.status == false){
            toast.error(result.message)
             //console.log(result)
        }
        else{
            const userInfo={
                id:result.id,
                token:result.token,
            }
            localStorage.setItem('userInfo',JSON.stringify(userInfo))
            //navigate
            navigate('/admin/dashboard')
        }
        
        //console.log(result)

      }

  return (
    <>
        <Header/>
            <main>
                <div className="container my-2 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="mb-3">Login</h4>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Email address</label>
                                        <input 
                                            {
                                                ...register("email", {
                                                    required: "Email is required",
                                                    pattern:{
                                                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email"
                                                    }
                                                })
                                            }
                                            type="email" className={`form-control ${errors.email && 'is-invalid'}`}  placeholder="Enter email address"/>
                                            {
                                                errors.email && <p className="text-danger">{errors.email.message}</p>
                                            }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input 
                                            {
                                                ...register("password", {
                                                    required: "password is required"
                                                })
                                            }
                                        type="password"className={`form-control ${errors.email && 'is-invalid'}`}  placeholder="Enter Password"/>
                                            {
                                                errors.password && <p className="text-danger">{errors.password.message}</p>
                                            }
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default Login