import React, { useContext } from 'react'
import './Home.css'
import Card from '../Card/Card'

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

import huthouse from '../../assets/huthouse.jpg'
import huthouse1 from '../../assets/huthouse1.jpg'
import huthouse2 from '../../assets/huthouse2.jpg'

import mountain from '../../assets/mountain.avif'
import mountain1 from '../../assets/mountain1.avif'
import mountain2 from '../../assets/mountain2.avif'

import old from '../../assets/old.avif'
import old1 from '../../assets/old1.avif'
import old2 from '../../assets/old2.avif'

import room from '../../assets/room.jpg'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'

import roomhouse from '../../assets/roomhouse.avif'
import roomhouse1 from '../../assets/roomhouse1.avif'
import roomhouse2 from '../../assets/roomhouse2.avif'

import roomnew from '../../assets/roomnew.avif'
import roomnew1 from '../../assets/roomnew1.avif'
import roomnew2 from '../../assets/roomnew2.avif'

import ski from '../../assets/ski.avif'
import ski1 from '../../assets/ski1.avif'
import ski2 from '../../assets/ski2.avif'

import villa from '../../assets/villa.jpg'
import villa1 from '../../assets/villa1.jpg'
import villa2 from '../../assets/villa3.jpg'

import village from '../../assets/village.avif'
import village1 from '../../assets/village1.avif'
import village2 from '../../assets/village2.avif'
import {ListingContext} from '../../Context/ListingContext'

const Home = () => {

  const {listings} = useContext(ListingContext)

  return (
    <div id='home'>

      {/* Static Listings */}

      <Card image1={house} image2={house1} image3={house2} title={'3BHK Villa in Jhansi'} price={'40,000'} />
      
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={'1BHK Farmhouse in Lucknow'} price={'60,000'} />
      
      <Card image1={air} image2={air1} image3={air2} title={'Rosehill Cottage Delhi'} price={'20,000'} />
      
      <Card image1={hut} image2={hut1} image3={hut2} title={'Woods Hut Retreat - Ambala'} price={'12,000'} />
      
      <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={'AquaVista Mountain Hut - Manali'} price={'28,000'} />
      
      <Card image1={mountain} image2={mountain1} image3={mountain2} title={'Woodland Haven Retreat - Mukteshwar'} price={'32,000'} />
      
      <Card image1={old} image2={old1} image3={old2} title={'The Green Manor Heritage Stay - Chettinad'} price={'45,000'} />
      
      <Card image1={room} image2={room1} image3={room2} title={'The Luxe Suite - Hauz Khas'} price={'55,000'} />
      
      <Card image1={roomhouse} image2={roomhouse1} image3={roomhouse2} title={'Skyline Serenity - Noida'} price={'38,000'} />
      
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"Lover's Nest - Nainital"} price={'42,000'} />
      
      <Card image1={ski} image2={ski1} image3={ski2} title={"Snowveil Retreat - Manali"} price={'48,000'} />
      
      <Card image1={villa} image2={villa1} image3={villa2} title={"The White Haven Grand - Mussoorie"} price={'1,18,000'} />
      
      <Card image1={village} image2={village1} image3={village2} title={"SereniStay Luxe Minimal - Bihar"} price={'85,000'} />


      {/* Dynamic Listings from context */}

      {
        listings.map((item, index) => (
          <Card
            key={index}
            image1={URL.createObjectURL(item.images[0])}
            image2={item.images[1] ? URL.createObjectURL(item.images[1]) : item.images[0] && URL.createObjectURL(item.images[0])}
            image3={item.images[2] ? URL.createObjectURL(item.images[2]) : item.images[0] && URL.createObjectURL(item.images[0])}
            title={`${item.title} - ${item.location}`}
            price={item.price}
          />
        ))
      }

    </div>
  )
}

export default Home
