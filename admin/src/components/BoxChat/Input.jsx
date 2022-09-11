import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import {MdAttachFile,MdOutlineImage} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { db, storage } from '../../firebase'
import {v4 as uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
const Input = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const {currentUser} = useSelector(state => state.stateReducer)
  const {user, chatId} = useSelector(state => state.stateChat)
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", user.uid), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className='h-[100px] bg-white p-[10] flex items-center justify-between'>
        <input type='text' placeholder='Type something...' className='w-full border-0 bg-white outline-none text-[#2f2d52] text-sm placeholder:text-slate-300 ml-2' onChange={(e) => setText(e.target.value)} value={text}/>
        <div className='flex items-center gap-2'>
            <MdAttachFile className='h-6 cursor-pointer text-3xl text-slate-400'/>
            <input type='file' style={{display:'none'}} id='file' className='w-full border-0 outline-none text-[#2f2d52] text-sm placeholder:text-slate-300' onChange={(e) => setImg(e.target.files[0])}/>
            <label htmlFor='file'>
                <MdOutlineImage className='h-6 cursor-pointer text-3xl text-slate-400'/>
            </label>
            <button className=' border-none p-[10px] bg-[#8da4f1] cursor-pointer mr-2 rounded-lg text-slate-200' onClick={handleSend}>
                Send
            </button>
        </div>
    </div>
  )
}

export default Input