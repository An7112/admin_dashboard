import React from 'react'

const Login = () => {
  return (
    <div className='mt-20 flex items-center justify-center'>
      <div className={`flex items-center justify-center flex-col gap-2 rounded-lg`}>
        <span className='text-[#5d5b8d] font-bold text-[24px]'>
            Chat
        </span>
        <span className='text-[#5d5b8d] text-[12px]'>
          Register
        </span>
        <form className='flex flex-col gap-4'>
          <input type='email' placeholder='email' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <input type='password' placeholder='password' className='p-4 border-0 border-b-1 border-[#a7bcff] placeholder:text-[rgb(175,175,175)] w-80'/>
          <button className='bg-[#7b96ec] text-white p-2 font-bold border-0 cursor-pointer'>
            Sign in
          </button>
          <p className='text-[#5d5b8d] font-[12px] mt-2'>You don't have an account? Register</p>
        </form>
      </div>
    </div>
  )
}

export default Login