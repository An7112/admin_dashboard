import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionType } from '../../store/reducer'
const Navbar = () => {
  const { currentUser } = useSelector(state => state.stateReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem("Current")
    dispatch({
    type: actionType.SET_CURRENT_USER,
    currentUser: []
   })
    navigate('/login')
  }
  console.log(currentUser)
  return (
    <div className='flex items-center bg-[#2f2d52] h-12 p-2 justify-between text-slate-300'>
      <span className=' font-bold'>Chat</span>
      <div className='flex gap-2'>
        <img src={currentUser.photoURL} alt='' className='bg-slate-300 h-6 w-6 rounded-full object-cover'/>
        <span>{currentUser.displayName}</span>
        <button type='button' className='bg-[#5d5b8d] text-slate-300 text-xs border-0 cursor-pointer p-1 rounded-md' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar