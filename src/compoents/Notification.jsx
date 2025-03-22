import React from 'react'
import Search from './Search'
import UserProfile from './UserProfile'
import Follower from '../pages/Follower'

function Notification() {
  return (
    <div className='w-72  h-screen hidden sm:block'>
      <Search/>
      <UserProfile/>
      <Follower/>
    </div>
  )
}

export default Notification
