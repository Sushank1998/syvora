import React from 'react'
import logo from "../assets/logo.png"
import Profile from '../compoents/Profile'
import Leanding from '../compoents/Leanding'
import Notification from '../compoents/Notification'

function Home() {
  return (
    <>
<div className="px-6 py-6 bg-gray-900 min-h-screen">

  <div className="flex items-center gap-3 mb-6">
    <img src={logo} alt="Logo" className="w-12" />
    <h2 className="text-white font-extrabold text-3xl tracking-wide">Penguin</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

    <div className="md:col-span-3 bg-gray-800 p-4 rounded-xl h-screen shadow-md border border-gray-700">
      <Profile />
    </div>

  
    <div className="md:col-span-6 bg-gray-800 p-6 rounded-xl h-screen shadow-md border border-gray-700">
      <Leanding />
    </div>

    <div className="md:col-span-3 bg-gray-800 p-4 rounded-xl h-screen shadow-md border border-gray-700">
      <Notification />
    </div>
  </div>
</div>

    </>
  )
}

export default Home
