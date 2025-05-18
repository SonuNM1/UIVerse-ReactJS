import React, { useState } from 'react'
import './Nav.css'
import logo from '/p.jpg'
import {CiSearch} from 'react-icons/ci'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaFire } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { PiFarmFill } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { FaTent } from "react-icons/fa6";
import { GiWoodCabin } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { FaTreeCity } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    let [visible, setVisible] = useState(false) 

  return (
    <div id='Nav'>
        {
            visible ? <div className='hamburger'>
            <Link to={'/login'}>
                <div className='ham1'>Login</div>
            </Link>
            <Link to={'/signup'}>
                <div className='ham1'>Sign Up</div>
            </Link>
            <Link to={'/listing'} >
                <div className='ham1'>List your Home</div>
            </Link>
            <Link to={'/contact'} >
                <div className='ham1'>Help Center</div>
            </Link>
        </div> : <div></div>
        }
        <div className='nav1'>
            <Link to={''}>
                <div className='logo'>
                <img src={logo} alt='' width="50px" />
                <h1>StayEase - Property Rental</h1>
            </div>
            </Link>
            <div className='search'>
                <input type='text' placeholder='Search Destination'/>
                <button><span>Search</span> <CiSearch/> </button>
            </div>
            <div className='ham'>
                <Link to={'/listing'}>
                    <button id='btn1'>List Your Home</button>
                </Link>
                <button id='btn2' onClick={() => {
                    setVisible(prev => !prev)
                }} >
                    <GiHamburgerMenu id='svg1'/>
                    <CgProfile id='svg2'/>
                </button>
            </div>
        </div>
        <div className='nav2'>
            <NavLink to={''}>
                <div className='svg11'>
                <FaFire/>
                <h3>Trending</h3>
            </div>
            </NavLink>
            <NavLink to={'/houses'} >
                <div className='svg11'>
                <FaHouse/>
                <h3>Houses</h3>
            </div>
            </NavLink>
            <div className='svg11'>
                <FaBed/>
                <h3>Rooms</h3>
            </div>
            <div className='svg11'>
                <PiFarmFill/>
                <h3>Farmhouse</h3>
            </div>
            <div className='svg11'>
                <MdOutlinePool/>
                <h3>Pool Houses</h3>
            </div>
            <div className='svg11'>
                <FaTent/>
                <h3>Tent Houses</h3>
            </div>
            <div className='svg11'>
                <GiWoodCabin/>
                <h3>Cabins</h3>
            </div>
            <div className='svg11'>
                <FaShop/>
                <h3>Shops</h3>
            </div>
            <div className='svg11'>
                <FaTreeCity/>
                <h3>Forest Houses</h3>
            </div>
        </div>
    </div>
  )
}

export default Nav

// 1.59