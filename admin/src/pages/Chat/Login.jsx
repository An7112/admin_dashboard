import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionType } from '../../store/reducer';
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: actionType.SET_CURRENT_USER,
        currentUser: {
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          photoURL: auth.currentUser.photoURL
        }
      })
      navigate("/chat")
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user)
    })
  })
  return (
    <div className='mt-20 flex items-center justify-center'>
      <div className={`flex items-center justify-center flex-col gap-2 rounded-lg`}>
        <span className='text-[#5d5b8d] font-bold text-[24px]'>
            Chat
        </span>
        <span className='text-[#5d5b8d] text-[12px]'>
          Register
        </span>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type='email' placeholder='email' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <input type='password' placeholder='password' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <button className={`bg-[#7b96ec] text-white p-2 font-bold border-0 cursor-pointer`}>
            Sign in
          </button>
          {err && <span>Something went wrong</span>}
          <p className='text-[#5d5b8d] font-[12px] mt-2'>You don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login