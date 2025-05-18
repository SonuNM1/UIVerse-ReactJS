import React, { useState } from 'react'
import './Contact.css'
import { MdMessage } from "react-icons/md";
import { toast } from 'react-toastify';

const Contact = () => {

  const [formData, setFormData] = useState({
    username: '', 
    email: '', 
    message: ''
  })

    const handleSubmit = (e) => {
      e.preventDefault() ; 

      console.log('Form submitted: ', formData) ; 

      // send to backend API or email service 

      toast('Message sent!') ; 
      setFormData({
        username: '', 
        email: '', 
        message: ''
      })

    }

    const handleChange = (e) => {
        const {name, value} = e.target ; 
        setFormData(prev => ({
          ...prev, 
          [name]: value 
        }))
    }

  return (
    <div id='contact'>
      <form 
        onSubmit={handleSubmit} className='contact-form'
        action='https://formspree.io/f/mldbzyqz'  
        method='POST'
      >
        
        <div style={{height: '180px'}} ></div> {/* Spacer to push content below Nav */}

        <h2>Contact Us</h2>
        <div className='form-group'>
            <label htmlFor='username'>Name</label>
            <input
                type='text'
                id='username'
                name='username'
                onChange={handleChange}
                required
                value={formData.username}
                placeholder='Enter your name'
            />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
                required
                value={formData.email}
                placeholder='Enter your email'
            />
        </div>
        <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
                id='message'
                name='message'
                rows='5'
                onChange={handleChange}
                required
                value={formData.message}
                placeholder='Your message goes here ...'
            ></textarea>
        </div>
        <button type='submit' className='submit-btn'>
           <MdMessage/> Send Message 
        </button>
      </form>
    </div>
  )
}

export default Contact
 