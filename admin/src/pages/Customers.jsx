import React from 'react'
import { customersData, customersGrid } from '../data/dummy'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from '../components'
import {MdBrightness1} from 'react-icons/md'
const Customers = () => {
  const dispatch = useDispatch();
  const { currentMode } = useSelector(state => state.stateReducer)
  return (
    <div className={`m-2 mt-16 md:m-10 p-2 md:p-10 rounded-3xl ${currentMode === 'Dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <Header category="Page" title="Customers" />
      <div className={`mx-auto ${currentMode === 'Dark' ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-2xl overflow-x-scroll`}>
        <div className='w-1400 xl:w-full'>
          <table className='border-separate table-fixed w-full indent-0 border-inherit grid grid-cols-8'>
            {customersGrid.map((item, index) => (
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1 w-${item.width}`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.type}</th>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.headerText}</th>
                </tr>
              </thead>
            ))}
          </table>
          {customersData.map((item, index) => (
          <table className='border-separate table-fixed w-full indent-0 border-inherit grid grid-cols-8'>
          
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.CustomerEmail}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.CustomerName}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.ProjectName}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border flex items-center justify-center flex-row'>
                  <MdBrightness1 className={`text-[${item.StatusBg}]`}/>
                  <th className={`border-l-0 relative border-solid text-xs overflow-hidden text-center xs:text-xs text-slate-400 `}>{item.Status}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.Weeks}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.Budget}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.Location}</th>
                </tr>
              </thead>
              <thead key={index} className={`border-separate align-middle text-xs flex items-center justify-center border-b-1`}>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-solid text-xs h-10 overflow-hidden text-center xs:text-xs text-slate-400'>{item.CustomerID}</th>
                </tr>
              </thead>
          </table>
          
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customers