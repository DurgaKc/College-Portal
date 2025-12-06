import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <h1 className="text-center font-bold text-2xl mt-2">Frequently Asked Questions</h1>
         <p className='text-center mt-5 mb-5'>Still have questions ? Contact us</p>
        <Footer/>
    </div>
  )
}

export default FAQ