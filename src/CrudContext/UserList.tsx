import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container bg-secondary p-1">
                    <div  className="navbar-brand text-white">User One</div>
                    <div className="ml-auto">
                        <Link to="/edit/1" className="navbar-brand text-white bg-warning px-3">Edit</Link>
                        <a className="navbar-brand text-white bg-danger px-3 rounded ml-1" >Delete</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserList