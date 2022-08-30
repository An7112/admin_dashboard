import React from 'react'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl mt-14'>
      <Header category="Page" title="Orders" />
      <div className='w-auto border-color rounded-none border-solid border block font-semibold text-xs h-auto relative xs:overflow-x-scroll'>
        <div className=' border-b-current border-t-current md:w-full xs:w-1000'>
          <table className='border-separate box-border table-fixed w-full indent-0 border-inherit grid grid-cols-7'>
            {ordersGrid.map((item) => (
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs xs:overflow-auto'>{item.headerText}</th>
                </tr>
              </thead>
            ))}
          </table>
        </div>
        {ordersData && ordersData.map((item, index) => (
          <div className=' border-b-current border-t-current md:w-full xs:w-1000' key={index}>
          <table className='border-separate box-border table-fixed w-full indent-0 border-inherit grid grid-cols-7'>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-auto overflow-hidden w-32 text-center xs:text-xs'>
                    <img src={item.ProductImage} alt="ProductImage" className='rounded-3xl object-cover'/>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs'>
                    <p className='text-gray-700'>{item.OrderItems}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs'>
                    <p className='text-gray-700'>{item.CustomerName}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs'>
                    <p className='text-gray-700'>{item.TotalAmount}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs rounded-xl' style={{backgroundColor:`${item.StatusBg}`}}>
                    <p className='text-white'>{item.Status}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs'>
                    <p className='text-gray-700'>{item.OrderID}</p>
                  </th>
                </tr>
              </thead>
              <thead className='border-separate align-middle text-xs flex items-center justify-center border-t-gray-400 border-t'>
                <tr className='box-border'>
                  <th className='border-l-0 relative border-t-0 border-solid text-xs h-10 overflow-hidden w-32 text-center xs:text-xs'>
                    <p className='text-gray-700'>{item.Location}</p>
                  </th>
                </tr>
              </thead>
          </table>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Orders