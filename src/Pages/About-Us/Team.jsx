import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Team = () => {
  const [activeTab, setActiveTab]= useState ("committe")

  const tabs = [
    {id:"committee", label:"committee Members"},
    {id:"teaching", label:"Teaching staffs"},
    {id:"non-teaching", label:"Non-Teaching staffs"},
  ];

  const committee = [
    {name:"Ashok Poudel", img:"/campus.jpeg"},
    {name:"mahesh Poudel", img:"/campus.jpg"}
  ];
  const teaching =[
    {name:"Mahesh Chaudhary", img:"/mmc.jpg"},
    {name:"Subham Chand", img:"/chairman.jpg"},
  ];
  const nteaching = [
    {name:"Subash Poudel", img:"/campus.jpg"},
    {name:"Subash Poudel", img:"/chairman.jpg"},
    {name:"Subham Verma", img:"/campus.jpeg"}
  ]
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <h1 className="text-center font-bold text-2xl mt-1">Our Team</h1>
        <div className="flex mt-4">
          <div className="w-full rounded-lg dark:bg-sky-700 p-1 mx-4">
            {
              tabs.map(({id, label})=>(
                <button
                key={id}
               onClick={() => setActiveTab(id)}
               className={`rounded-md px-6 py-1 text-md font-medium
               ${
               activeTab === id
               ? "bg-white text-black shadow-sm"
               : "bg-transparent text-white"
               }`}>{label}
                </button>
              ))
            }
          </div>
        </div>
        <main className='mx-auto w-full flex-1 p-6'>
          {activeTab === "committee" &&(
            <div className="animate-fade flex flex-col md:flex-row">
              {
                committee.map((c, index)=>(
                   <div key={index} className="w-1/2 md:w-2/4 lg:w-1/4 m-2">
            <img className="h-50 w-full " src={c.img} alt={c.name} />
           <p className="text-center">{c.name}</p>
           </div>
                ))
              }
            </div>
          )}

          {activeTab === "teaching" &&(
            <div className="animate-fade flex flex-col md:flex-row">
              {
                teaching.map((t, index)=>(
                   <div key={index} className="w-1/2 md:w-2/4 lg:w-1/4 m-2">
            <img className="h-50 w-full " src={t.img} alt={t.name} />
           <p className="text-center">{t.name}</p>
           </div>
                ))
              }
            </div>
          )}

          {activeTab === "non-teaching" &&(
            <div className="animate-fade flex flex-col md:flex-row">
              {
                nteaching.map((n, index)=>(
                   <div key={index} className="w-1/2 md:w-2/4 lg:w-1/4 m-2">
            <img className="h-50 w-full " src={n.img} alt={n.name} />
           <p className="text-center">{n.name}</p>
           </div>
                ))
              }
            </div>
          )}

        </main>

        <Footer/>
    </div>
  )
}

export default Team