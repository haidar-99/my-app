import React from 'react'
import './Data.css'
import image from '../Img/image.png'

const Data = () => {
    return (
        <div className='data bg-dark'>

            <div className='container'>
                <div className='just'>
                    <h1>Workflow that just works</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br /> officia deserunt mollit anim id est laborum — semper quis<br /> lectus nulla at volutpat diam ut venenatis.</p>
                </div>
                <div className='row'>

                    <div className='col-md-6 para'>

                        <h5>LIGHTNING FAST WORKFLOW</h5>
                        <h3>Data-driven insights</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='col-md-6 my-5 image'>
                        <a className="navbar-brand " href="/">
                            <img src={image} alt="" width="500" height="500" />
                        </a>
                    </div>


                </div>
                <div className='row'>
                    <div className='col-md-6 my-5 image'>
                        <a className="navbar-brand " href="/">
                            <img src={image} alt="" width="500" height="500" />
                        </a>
                    </div>
                    <div className='col-md-6 para'>
                        <h5>LIGHTNING FAST WORKFLOW</h5>
                        <h3>Data-driven insights</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>




                    <div className='row'>

                        <div className='col-md-6 para'>
                            <h5>LIGHTNING FAST WORKFLOW</h5>
                            <h3>Data-driven insights</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className='col-md-6 my-5 image'>
                            <a className="navbar-brand " href="/">
                                <img src={image} alt="" width="500" height="500" />
                            </a>
                        </div>


                    </div>
                    <hr className='h' />
                </div>
            </div>
        </div>
    )
}

export default Data