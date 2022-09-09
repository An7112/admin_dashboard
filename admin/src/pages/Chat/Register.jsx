import React from 'react'
import addAvatar from '../../data/addAvatar.png'
const Register = () => {
  return (
    <div className='mt-20 flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col gap-2 rounded-lg'>
        <span className='text-[#5d5b8d] font-bold text-[24px]'>
            Chat
        </span>
        <span className='text-[#5d5b8d] text-[12px]'>
          Register
        </span>
        <form className='flex flex-col gap-4'>
          <input type='text' placeholder='display name' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <input type='email' placeholder='email' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <input type='password' placeholder='password' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <input style={{display:'none'}} type='file' id='file'/>
          <label htmlFor='file' className='flex items-center gap-2 text-[#8da4f1] text-xs cursor-pointer'>
            <img src={addAvatar} alt='' className='w-8'/>
            <span>Add an avatar</span>
          </label>
          <button className='bg-[#7b96ec] text-white p-2 font-bold border-0 cursor-pointer'>
            Sign up
          </button>
          <p className='text-[#5d5b8d] font-[12px] mt-2'>You do have an account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Register