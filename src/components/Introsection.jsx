import React from 'react'
import playIcon from '../svgs/play.svg'
import rightImg from '../svgs/right-intro-img.svg'

const Introsection = () => {
  return (
    <div className='introsection'>

        <div className="row">
        <div className="col-12 col-md-6 col-lg-7 intro-left-side">
          <h1>Simple online hotel management system</h1>
          <p>Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci libero. Sed est sem, mollis nec lectus nec, varius suscipit ligula. </p>
          <div className="watch">
            <button className="mycustombtn me-4">About us</button>
            <a href='#' className='me-2'><img src={playIcon} /></a> <span>Watch video</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 intro-right-side">
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum reprehenderit accusantium, eum optio at! Asperiores, obcaecati doloremque ex accusantium similique, aperiam explicabo officiis reprehenderit neque, magnam debitis dolorem id? */}
        </div>
        </div>
       
    </div>
  )
}

export default Introsection