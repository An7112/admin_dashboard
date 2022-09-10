import React from 'react'
import user1 from '../../data/avatar2.jpg'
const Chats = () => {
  return (
    <div>
      <div className='p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-[#2f2d52]'>
        <img src={user1} alt='' className='w-12 h-12 rounded-full object-cover'/>
        <div className=''>
          <span className='text-sm font-[500]'>Linh</span>
          <p className='text-xs text-slate-400'>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats