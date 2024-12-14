import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//bootrapp import
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';

//import toastify pour les message alert
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



//scss import
import './assets/scc/style.scss';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/Login';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/header-footer/RequireAuth';
import {default as ShowServices} from './components/backend/services/Show';
import {default as CreateServices} from './components/backend/services/Create';
import {default as EditServices} from './components/backend/services/Edit';

import {default as ShowProjects} from './components/backend/projects/Show';
import {default as CreateProjects} from './components/backend/projects/Create';
import {default as EditProjects} from './components/backend/projects/Edit';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/a-propos" element={<About />} />
          <Route  path="/services" element={<Services />} />
          <Route  path="/projets" element={<Projects />} />
          <Route  path="/blog" element={<Blogs />} />
          <Route  path="/contact" element={<ContactUs />} />

          <Route  path="/admin/login" element={<Login />} />


          <Route  path="/admin/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route  path="/admin/services" element={
            <RequireAuth>
              <ShowServices />
            </RequireAuth>
          } />
          <Route  path="/admin/services/create" element={
            <RequireAuth>
              <CreateServices />
            </RequireAuth>
          } />
          <Route  path="/admin/services/edit/:id" element={
            <RequireAuth>
              <EditServices />
            </RequireAuth>
          } />

          <Route  path="/admin/projects" element={
            <RequireAuth>
              <ShowProjects />
            </RequireAuth>
          } />
          <Route  path="/admin/projects/create" element={
            <RequireAuth>
              <CreateProjects />
            </RequireAuth>
          } />
          <Route  path="/admin/projects/edit/:id" element={
            <RequireAuth>
              <EditProjects />
            </RequireAuth>
          } />
          
        </Routes>
      </BrowserRouter>

      <ToastContainer 
        position="top-center"
      />
    </>
  )
}

export default App
