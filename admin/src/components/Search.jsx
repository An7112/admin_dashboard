import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionType } from '../store/reducer'
import { MdOutlinePersonSearch } from 'react-icons/md'
import { useEffect } from 'react'
import { useState } from 'react'
const Search = () => {

  const dispatch = useDispatch()
  const { search, activeSearch } = useSelector(state => state.stateReducer)
  const onChangeSearch = (e) => {
    dispatch({
      type: actionType.SET_SEARCH,
      search: e.target.value
    })
  }
  const setActiveSearch = () => {
    dispatch({
      type: actionType.SET_ACTIVE_SEARCH,
      activeSearch: !activeSearch
    })
  }
  console.log(activeSearch)
  return (
    <div className={`flex items-center justify-center flex-row border-1 box-border ${activeSearch === true ? 'w-48' : 'w-10'} rounded-lg p-2`} style={{transition:'all 0.5s ease'}}>
      <MdOutlinePersonSearch className='text-2xl cursor-pointer w-7' onClick={setActiveSearch}/>
      <input type="text" placeholder='Search...' onChange={onChangeSearch} value={search} className={` h-6 mr-2 bg-transparent rounded-lg overflow-hidden placeholder:text-sm border-none focus:outline-none pl-4 text-sm ${activeSearch === false && 'hidden'}`} />
    </div>
  )
}

export default Search