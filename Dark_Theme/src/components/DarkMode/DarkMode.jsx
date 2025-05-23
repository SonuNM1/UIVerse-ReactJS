import React, { useState } from 'react'
import Sun from './Sun.svg'
import Moon from './Moon.svg'
import './DarkMode.css'

const DarkMode = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div className='dark_mode'>
        <input
          className='dark_mode_input'
          type="checkbox"
          id='darkmode-toggle'
          checked={theme === 'dark'}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
          <Sun/>
          <Moon/>
        </label>
    </div>
  )
}

export default DarkMode
