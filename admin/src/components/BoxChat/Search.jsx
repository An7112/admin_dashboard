import React from 'react'
import user1 from '../../data/avatar2.jpg'
const Search = () => {
  return (
    <div className='border-b-1 border-[gray]'>
      <div className=''>
        <input type='text' placeholder='Find a user' className=' bg-transparent border-0 text-white outline-none placeholder:text-slate-300'/>
      </div>
      <div className='p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-[#2f2d52]'>
        <img src={user1} alt='' className='w-12 h-12 rounded-full object-cover'/>
        <div className=''>
          <span>Linh</span>
        </div>
      </div>
    </div>
  )
}

export default Search