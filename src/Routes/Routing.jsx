import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'

import Introduction from '../Pages/About-Us/Introduction'
import FAQ from '../Pages/About-Us/FAQ'
import Team from '../Pages/About-Us/Team'

import Publication from '../Pages/Contents/Publication'
import Notices from '../Pages/Contents/Notices'

import Programs from '../Pages/Programs'
import Reports from '../Pages/Reports'
import News from '../Pages/News'
import Downloads from '../Pages/Downloads'
import Curriculum from '../Pages/Curriculum'
import Gallery from '../Pages/Gallery'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Admin from '../Pages/Admin'



const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        {/* About-Us */}
         <Route path='/intro' element={<Introduction/>} />
         <Route path='/faq' element={<FAQ/>} />
         <Route path='/team' element={<Team/>} />

         {/* Contents */}
          <Route path='/publication' element={<Publication/>} />
          <Route path='/notice' element={<Notices/>} />


        <Route path='/program' element={<Programs/>} />
        <Route path='/report' element={<Reports/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/downloads' element={<Downloads/>} />
        <Route path='/curriculum' element={<Curriculum/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing