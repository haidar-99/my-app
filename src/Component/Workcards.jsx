import React from 'react'
import Workflow from './Workflow'
import './Workcard.css'
import icon from '../Img/icon.svg'
import icon1 from '../Img/icon1.svg'
import icon2 from '../Img/icon2.svg'
import icon3 from '../Img/icon3.svg'
import icon4 from '../Img/icon4.svg'
import icon5 from '../Img/icon5.svg'


const Workcards = () => {
  return (
    <div className='contain bg-dark '>
      <div className='container  '>
        <div className='build'>

        <h2>Build up the whole picture</h2>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br /> officia deserunt mollit anim id est laborum — semper quis lectus<br /> nulla at volutpat diam ut venenatis.</p>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Workflow title="Robust Workflow" icons={icon} discription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
          </div>
          <div className='col-md-4'>
            <Workflow title="Robust Workflow" icons={icon1} discription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
          </div>
          <div className='col-md-4'>
            <Workflow title="Robust Workflow" icons={icon2} discription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
          </div>
          <div className='col-md-4'>
            <Workflow title="Robust Workflow" icons={icon3} discription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
          </div>
          <div className='col-md-4'>
            <Workflow title="Robust Workflow" icons={icon4} discription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
          </div>
          <div className='col-md-4'>
            <Workflow title="Robust Workflow" icons={icon5} discription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." />
          </div>
        </div>
        <hr className='h'/>
      </div>
      <div>
      
      </div>
    </div>
  )
}

export default Workcards