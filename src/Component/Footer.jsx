import React from 'react'
import './Footer.css'
import logo from '../Img/logo.svg'




const Footer = () => {
    return (

        <section className='foot bg-dark'>
            <div className='container outer'>
                <div className='box row'>
                    <div className="col-md-8"><h1>For previewing layouts and visual?</h1></div>
                    <div className='col-md-4'>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                    </div>

                </div>

            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="" width="30" height="24" />
                        </a>
                    </div>
                    <div className='col-md-8'>
                      
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <p>Made by Cruip. All right reserved</p>
                    </div>
                    <div className='col-md-8 '>
                        <ul className='d-flex list'>
                            <li>Contact</li>
                            <li>About us</li>
                            <li>FAQ's</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Footer