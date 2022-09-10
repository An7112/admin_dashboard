import React, { memo, useEffect, useState } from 'react'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Pagination = ({ datasPerPage, currentPage, totalDatas, paginate }) => {
    const dispatch = useDispatch();
    const { currentColor, currentMode } = useSelector(state => state.stateReducer)
    const rowContainer = useRef()
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
        pageNumbers.push(i)
    }
    const lenghtPage = pageNumbers.length
    const [scrollPage, setScrollPage] = useState(0)
    const [count, setCount] = useState(0)
    const increaseScroll = () => {
        setScrollPage(scrollPage + 240)
        setCount(count + 5)
    }
    const decreaseScroll = () => {
        setScrollPage(scrollPage - 240)
        if (count > 0) {
            setCount(count - 5)
        }
    }
    useEffect(() => {
        rowContainer.current.scrollLeft = scrollPage

    }, [scrollPage])
    return (
        <div className='flex w-[310px] flex-row ml-auto items-center justify-center fixed bottom-4 bg-bg-gray-transparent rounded-lg'>
            <motion.div whileTap={{ scale: 0.75 }} className={`${currentMode === 'Dark' ? 'text-white' : 'text-gray-600'} w-8 h-8 bg-bg-gray-transparent float-left rounded-md flex items-center justify-center cursor-pointer border-1 border-slate-300 ${lenghtPage - count < 5 && 'hidden'}`} onClick={increaseScroll}>
                <MdNavigateNext />
            </motion.div>
            <div ref={rowContainer} className='flex flex-row w-60  overflow-x-hidden'>
                {pageNumbers.map(number => (
                    <div key={number} className={`${currentPage === number && 'bg-gray-600'} m-1 rounded-xl`}>
                        <button onClick={() => paginate(number)} className={`w-10 h-10 ${currentMode === 'Dark' ? 'text-white' : 'text-gray-400'}`}>
                            {number}
                        </button>
                    </div>
                ))}
            </div>
            <motion.div whileTap={{ scale: 0.75 }} className={`${currentMode === 'Dark' ? 'text-white' : 'text-gray-600'} w-8 h-8 bg-bg-gray-transparent float-right rounded-md flex items-center justify-center cursor-pointer border-1 border-slate-300 ${count === 0 && 'hidden'}`} onClick={decreaseScroll}>
                <MdNavigateBefore />
            </motion.div>
        </div>
    )
}

export default Pagination