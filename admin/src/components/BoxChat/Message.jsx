import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import user1 from '../../data/avatar2.jpg'
const Message = ({message}) => {
  const {currentUser} = useSelector(state => state.stateReducer)
  const {user, chatId} = useSelector(state => state.stateChat)
  const ref = useRef()
  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  },[message])
  return (
    <div ref={ref} className={`flex gap-5 mb-5 ${message.senderId === currentUser.uid && 'flex-row-reverse'}`}>
      <div className='flex flex-col text-slate-400 font-[300]'>
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : user.photoURL} alt='' className='w-10 h-10 rounded-full object-cover mb-2'/>
        <span className='text-xs'>just now</span>
      </div>
      <div className={`max-w-[80%] flex flex-col gap-2 ${message.senderId === currentUser.uid && 'items-end'}`}>
        <p className={`bg-slate-300 max-w-max pt-[10px] pr-5 pb-[10px] pl-5 rounded-b-[10px] rounded-tr-[10px] ${message.senderId === currentUser.uid && 'rounded-t-[10px] rounded-br-[0px] bg-[#504e81] text-white'}`}>{message.text}</p>
        {message.img && (
           <img src={message.img} alt='' className='w-1/2'/>
        )}
      </div>
    </div>
  )
}

export default Message