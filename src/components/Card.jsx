import React from 'react'
import CardImg from '../svgs/card-center.svg'
const Card = () => {
  return (
    <div className='cart'>
        <h1>Market Research</h1>
        <small>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.</small>
        <img src={CardImg} alt="Xidmetler1" />
    </div>
  )
}

export default Card