import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
const Login = () => {

const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState ({
    email: 'example@gmail.com',
    password: '******',
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post(`https://apiheims.dibugsoft.com/api/User/Login`,{
        email:formData.email,
        password: formData.password,
        isUgc:true,
        uniId:0,
        cOllegeId:12,
        // apiKey:1
      });

       
        // for login popup message
      toast.success('Login successful',{
        autoClose: 500
      })
      setTimeout(()=>{
        Navigate('/adminpage')
      },700)
    } catch (error){
      toast.error('No user found',{autoClose:200})

      console.error('Error during login:',
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>

    <div className="flex flex-col items-center justify-center  bg-gray-100 mb-0">
        <h2 className="text-2xl mt-6 text-center text-gray-700 mb-5">
          Admin Login
        </h2>
      <div className=" mb-6 p-6 bg-white rounded-2xl shadow-lg w-full max-w-md">
        {/*  */}
       <div  className='bg-white'>
         <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
             type={showPassword ? 'text' : 'password'}
              id="password"
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full dark:bg-sky-700 text-white py-2 rounded-3xl hover:dark:bg-sky-800 transition duration-300"
          >
            Login
          </button>
        </form>
       </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>

        <Footer/>
    </div>
  )
}

export default Login