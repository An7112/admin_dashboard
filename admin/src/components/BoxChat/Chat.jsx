import React from 'react'
import {MdVideocam, MdGroupAdd, MdOutlineMoreHoriz} from 'react-icons/md'
import Messages from './Messages'
import { useSelector } from 'react-redux'
import Input from './Input'
function Chat() {
  const {user} = useSelector(state => state.stateChat)
  return (
    <div className='flex-[2]'>
      <div className='h-12 bg-[#5d5b8d] flex items-center justify-between p-2 text-slate-300'>
        <span>{user.displayName}</span>
        <div className='flex gap-2'>
          <MdVideocam className='h-6 cursor-pointer text-3xl'/>
          <MdGroupAdd className='h-6 cursor-pointer text-3xl'/>
          <MdOutlineMoreHoriz className='h-6 cursor-pointer text-3xl'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat