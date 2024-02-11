import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Helmet} from "react-helmet"

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Helmet>
        <title> All purpose store</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    
  )
}

export default Layout