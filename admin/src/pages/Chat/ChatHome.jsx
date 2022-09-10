import React from 'react'
import Chat from '../../components/BoxChat/Chat'
import Sidebar from '../../components/BoxChat/Sidebar'

const ChatHome = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='border-1 md:w-4/6 min-screen:w-11/12 h-[700px] border-slate-500 box-border rounded-lg flex overflow-hidden'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default ChatHome