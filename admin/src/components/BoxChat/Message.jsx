import React from 'react'
import user1 from '../../data/avatar2.jpg'
const Message = () => {
  const owner = true;
  return (
    <div className={`flex gap-5 mb-5 ${owner && 'flex-row-reverse'}`}>
      <div className='flex flex-col text-slate-400 font-[300]'>
        <img src={user1} alt='' className='w-10 h-10 rounded-full object-cover mb-2'/>
        <span className='text-xs'>just now</span>
      </div>
      <div className={`max-w-[80%] flex flex-col gap-2 ${owner && 'items-end'}`}>
        <p className={`bg-slate-300 max-w-max pt-[10px] pr-5 pb-[10px] pl-5 rounded-b-[10px] rounded-tr-[10px] ${owner && 'rounded-t-[10px] rounded-br-[0px] bg-[#504e81] text-white'}`}>Hello</p>
        <img src={user1} alt='' className='w-1/2'/>
      </div>
    </div>
  )
}

export default Message