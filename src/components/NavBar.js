import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <div style={{height:'50px',width:'auto',display:'flex',justifyContent:'center'}}>
        <img src="/assets/tasty-bites-logo.png" ></img>
      </div></Link>
                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default NavBar