import React from 'react'
import Search from './Search'
import Navbar from './Navbar'
import Chats from './Chats'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const {chatsActive} = useSelector(state => state.stateReducer)
  return (
    <div className={`flex-[0.8] bg-[#3e3c61] ${!chatsActive && 'hidden'}`}>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar