import React, { useState } from 'react'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import Pagination from './Pagination'
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
const Employees = () => {
  const dispatch = useDispatch();
  const {currentMode } = useSelector(state => state.stateReducer)
  const [currentPage, setCurrentPage] = useState(1)
  const [datasPerPage, setDatasPerPage] = useState(5)
  const indexOfLastData = currentPage * datasPerPage
  const indexOfFirstData = indexOfLastData - datasPerPage
  const currentDatas = ordersData.slice(indexOfFirstData, indexOfLastData)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  const [currentSort, setCurrentSort] = useState("default")
  const sortTypes = {
    up: {
      class: <FaSortUp />,
      fn: (a, b) => a.TotalAmount - b.TotalAmount
    },
    down: {
      class: <FaSortDown />,
      fn: (a, b) => b.TotalAmount - a.TotalAmount
    },
    default: {
      class: <FaSort />,
      fn: (a, b) => a
    }
  }
  const onSortChange = () => {
    let nextSort;
    if (currentSort === 'down') nextSort = 'up'
    else if (currentSort === 'up') nextSort = 'default'
    else if (currentSort === 'default') nextSort = 'down'
    setCurrentSort(nextSort)
  }
  return (
    <div className={`m-2 mt-16 md:m-10 p-2 md:p-10 rounded-3xl ${currentMode === 'Dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <Header category="Page" title="Employees" />
      <button type='button' onClick={onSortChange} className=' w-10 h-10 bg-gray-200 rounded-lg mb-4 shadow-2xl flex items-center justify-center'>
        <p>{sortTypes[currentSort].class}</p>
      </button>
      <div className={` mx-auto ${currentMode === 'Dark' ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-2xl overflow-x-scroll`}>
        <div className='w-1400 xl:w-full'>
          <table className='border-separate table-fixed w-full indent-0 border-inherit grid grid-cols-7'>
            {ordersGrid.map((item) => (
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.headerText}</th>
                </tr>
              </thead>
            ))}
          </table>
        </div>
        {[...currentDatas].sort(sortTypes[currentSort].fn).map((item) => (
          <div className='w-1400 xl:w-full' key={item}>
            <table className='border-separate box-border table-fixed w-full indent-0 border-inherit grid grid-cols-7'>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 text-xs h-auto overflow-hidden text-center xs:text-xs'>
                    <img src={item.ProductImage} alt="ProductImage" className='rounded-3xl object-cover w-32 h-32' />
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 text-xs h-10 overflow-hidden text-center xs:text-xs'>
                    <p className='text-slate-400'>{item.OrderItems}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 text-xs h-10 overflow-hidden text-center xs:text-xs'>
                    <p className='text-slate-400'>{item.CustomerName}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 text-xs h-10 overflow-hidden text-center xs:text-xs'>
                    <p className='text-slate-400'>{item.TotalAmount}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 border-solid text-xs h-10 overflow-hidden text-center xs:text-xs rounded-xl' style={{ backgroundColor: `${item.StatusBg}` }}>
                    <p className='text-white px-4'>{item.Status}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 border-solid text-xs h-10 overflow-hidden text-center xs:text-xs'>
                    <p className='text-slate-400'>{item.OrderID}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-b-1'>
                <tr className='box-border'>
                  <th className='border-l-0 border-solid text-xs h-10 overflow-hidden text-center xs:text-xs'>
                    <p className='text-slate-400'>{item.Location}</p>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        ))}
        <Pagination datasPerPage={datasPerPage} currentPage={currentPage} totalDatas={ordersData.length} paginate={paginate} />
      </div>

    </div>
  )
}

export default Employees