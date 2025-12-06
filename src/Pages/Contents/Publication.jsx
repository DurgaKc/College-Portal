import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Publication = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <h1 className="text-center font-bold text-2xl mt-1">Our Publication</h1>

        <Footer/>
    </div>
  )
}

export default Publication