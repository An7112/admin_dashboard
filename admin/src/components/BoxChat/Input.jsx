import React from 'react'
import {MdAttachFile,MdOutlineImage} from 'react-icons/md'
const input = () => {
  return (
    <div className='h-[100px] bg-white p-[10] flex items-center justify-between'>
        <input type='text' placeholder='Type something...' className='w-full border-0 bg-white outline-none text-[#2f2d52] text-sm placeholder:text-slate-300 ml-2'/>
        <div className='flex items-center gap-2'>
            <MdAttachFile className='h-6 cursor-pointer text-3xl text-slate-400'/>
            <input type='file' style={{display:'none'}} id='file' className='w-full border-0 outline-none text-[#2f2d52] text-sm placeholder:text-slate-300'/>
            <label htmlFor='file'>
                <MdOutlineImage className='h-6 cursor-pointer text-3xl text-slate-400'/>
            </label>
            <button className=' border-none p-[10px] bg-[#8da4f1] cursor-pointer mr-2 rounded-lg text-slate-200'>
                Send
            </button>
        </div>
    </div>
  )
}

export default input