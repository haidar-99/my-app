import React from 'react'
import './Workflow.css'


const Workflow = (props) => {
  return (
    <div className='Work'>

      <div className='card bg-dark mx-3 my-3'>
        <a className="navbar-brand " href="/">
          <img src={props.icons} alt="" width="90" height="70" />
        </a>
        <div className='card-body '>
          <h1 className='card-title'>{props.title}</h1>
          <p className='card-text'>{props.discription}</p>
        </div>

      </div>
      

    </div>
  )
}

export default Workflow