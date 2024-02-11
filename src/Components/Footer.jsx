import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'



const Footer = () => {
  const current = new Date();

  return (
    <div className='footer-container'>
      <p>{current.getFullYear()} Headphones All rights reserved</p>
      <p className='icons'>
      <AiFillInstagram/>
      <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer