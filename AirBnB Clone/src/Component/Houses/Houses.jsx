import React from 'react'
import './Houses.css'

import house from '../../assets/house.jpg'
import house1 from '../../assets/housekichen.jpg'
import house2 from '../../assets/houseliving.jpg'

import farmhouse from '../../assets/farmhouse2.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse.jpg'

import air from '../../assets/air1.avif'
import air1 from '../../assets/air2.avif'
import air2 from '../../assets/air3.avif'

import hut from '../../assets/hut1.avif'
import hut1 from '../../assets/hut2.avif'
import hut2 from '../../assets/hut3.avif'

import Card from '../Card/Card'


const Houses = () => {
  return (
    <div id='houses'>
      <Card image1={house} image2={house1} image3={house2} title={'3BHK Villa in Jhansi'} price={'40,000'} />
      
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={'1BHK Farmhouse in Lucknow'} price={'60,000'} />
      
      <Card image1={air} image2={air1} image3={air2} title={'Rosehill Cottage Delhi'} price={'20,000'} />
      
      <Card image1={hut} image2={hut1} image3={hut2} title={'Woods Hut Retreat - Ambala'} price={'12,000'} />
    </div>
  )
}

export default Houses
