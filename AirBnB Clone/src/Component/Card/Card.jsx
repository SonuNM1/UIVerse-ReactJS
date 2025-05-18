import React from 'react'
import './Card.css'

const Card = ({image1, image2, image3, title, price}) => {
  return (
    <div className='card'>
      <div className='images'>
        <img src={image1} alt='house' />
        <img src={image2} alt='house1' />
        <img src={image3} alt='house2' />
      </div>
      <span className='cardspan1'>{title}</span>
      <span className='cardspan2'>₹{price}/Month</span>
    </div>
  )
}

export default Card
