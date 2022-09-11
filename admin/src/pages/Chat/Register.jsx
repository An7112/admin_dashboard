import React from 'react'
import addAvatar from '../../data/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db, storage } from '../../firebase'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import {doc, setDoc} from 'firebase/firestore'
import { useNavigate,Link } from 'react-router-dom'
const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL:downloadURL,
            })
            await setDoc(doc(db, 'users', res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })
            await setDoc(doc(db, 'userChats', res.user.uid),{})
            navigate('/chat')
          });
        }
      );
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className='mt-20 flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col gap-2 rounded-lg'>
        <span className='text-[#5d5b8d] font-bold text-[24px]'>
          Chat
        </span>
        <span className='text-[#5d5b8d] text-[12px]'>
          Register
        </span>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80' />
          <input type='email' placeholder='email' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80' />
          <input type='password' placeholder='password' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file' className='flex items-center gap-2 text-[#8da4f1] text-xs cursor-pointer'>
            <img src={addAvatar} alt='' className='w-8' />
            <span>Add an avatar</span>
          </label>
          <button className='bg-[#7b96ec] text-white p-2 font-bold border-0 cursor-pointer'>
            Sign up
          </button>
          {err && <span>Something went wrong</span>}
          <p className='text-[#5d5b8d] font-[12px] mt-2'>You do have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register