import React from 'react'
import avatar from '../../data/avatar.jpg'
const Navbar = () => {
  return (
    <div className='flex items-center bg-[#2f2d52] h-12 p-2 justify-between text-slate-300'>
      <span className=' font-bold'>Chat</span>
      <div className='flex gap-2'>
        <img src={avatar} alt='' className='bg-slate-300 h-6 w-6 rounded-full object-cover'/>
        <span>An</span>
        <button type='button' className='bg-[#5d5b8d] text-slate-300 text-xs border-0 cursor-pointer p-1'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar