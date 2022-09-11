import { doc, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import user1 from '../../data/avatar2.jpg'
import { db } from '../../firebase'
const Chats = () => {
  const dispatch = useDispatch()
  const [chats, setCharts] = useState([])
  const { currentUser } = useSelector(state => state.stateReducer)
  useEffect(() => {
    const getChats = () => {
      const ubsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setCharts(doc.data())
      })
      return () => {
        ubsub()
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])
  const handleSelect = (u) => {
    dispatch({
      type: "CHANGE_USER",
      user: u,
      chatId: currentUser.uid > u.uid ? currentUser.uid + u.uid : u.uid + currentUser.uid
    })
  }
  return (
    <div>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div key={chat[0]} className='p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-[#2f2d52]' onClick={() => handleSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoURL} alt='' className='w-12 h-12 rounded-full object-cover' />
        <div className=''>
          <span className='text-sm font-[500]'>{chat[1].userInfo.displayName}</span>
          <p className='text-xs text-slate-400'>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats