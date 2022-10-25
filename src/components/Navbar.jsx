import React from 'react'
import logo from '../svgs/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} alt="DAVUDKHAN BANK RESPUBLIKA" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Demos</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Docs</a>
          </li>

          <button className='mycustombtn'>Buy Now</button>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar