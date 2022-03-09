import React from 'react'
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container bg-secondary p-1">
            <Link to="/" className="navbar-brand text-white">My Team</Link>
            <Link to="/add" className="navbar-brand text-white bg-primary px-3 rounded" >Add User</Link>
        </div>
    </nav>
  )
}

export default Heading