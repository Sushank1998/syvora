import React from 'react'
import logo from "../assets/logo.png"
import Profile from '../compoents/Profile'
import Leanding from '../compoents/Leanding'
import Notification from '../compoents/Notification'

function Home() {
  return (
    <>
    <div className=' px-10 py-6'>
      <div className='flex items-center gap-2  mb-5'>
      <img src={logo} alt=""  className='w-10'/>
      <h2 className='text-white font-bold text-2xl'>Penguin</h2>

      </div>
     <div className='flex justify-between '>

        <div className=' border-gray-400 border p-2 '><Profile/></div>
        <div className=' w-full  border-r border-l border-gray-400 '><Leanding/></div>
        <div className='  border-gray-400 border p-2  '><Notification/></div>
     </div>
     </div>
    </>
  )
}

export default Home
