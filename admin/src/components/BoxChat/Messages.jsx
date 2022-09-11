import { doc, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import {db} from '../../firebase'
const Messages = () => {
  const [messages, setMessages] = useState([])
  const {user, chatId} = useSelector(state => state.stateChat)
  useEffect(() => {
    const ubSub = onSnapshot(doc(db,"chats", chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      ubSub()
    }
  },[chatId])
  console.log(messages)
  return (
    <div className=' p-[10px] h-[calc(100%-160px)] overflow-y-scroll'>
      {messages.map((mes) => (
         <Message message={mes} key={mes.id}/>
      ))}
    </div>
  )
}

export default Messages