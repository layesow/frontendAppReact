import React, { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {logout} = useContext(AuthContext)
  return (
    <div className="card shadow border-0">
        <div className="card-body p-4 sidebar">
            <h4 className="">Sidebare</h4>
            <ul>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/services">Services</Link></li>
                <li><a href="">Projets</a></li>
                <li><a href="">Articles</a></li>
                <li>
                    {/* logout */}
                    <button onClick={logout} className="btn btn-primary mt-4">Logout</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar