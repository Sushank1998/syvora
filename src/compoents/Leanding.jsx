import React, { useState } from 'react'
import Addpost from './Addpost'
import { MdLibraryAdd } from "react-icons/md";
import Post from './Post';
import { Outlet } from 'react-router-dom';

function Leanding() {
  const [add,setAdd] = useState(false)
  return (
    <>
    <div className='flex flex-col items-center justify-cente border-gray-400 border p-4'>
      {add ?<Addpost setAdd={setAdd}/>: <MdLibraryAdd className='text-white cursor-pointer' size={20} onClick={()=>setAdd(true)}/>}
    </div>
    <Outlet/>
  
    </>
  )
}

export default Leanding
