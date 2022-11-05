import React from 'react'
import logo from '../Img/logo.svg';
import  './Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="30" height="24"/>
    </a>
    <div className="d-flex">
    <a className="doc"  href="/">Documentation</a>
    <button type="button" className="btn btn-primary">Sing up</button>
    </div>
  </div>
 
</nav>
    </div>
  )
}

export default Navbar