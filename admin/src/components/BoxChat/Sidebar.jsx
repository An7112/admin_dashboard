import React from 'react'
import Search from './Search'
import Navbar from './Navbar'
import Chats from './Chats'
const Sidebar = () => {
  return (
    <div className='flex-1 bg-[#3e3c61]'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar