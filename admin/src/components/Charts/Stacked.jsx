import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { stackedChartData } from '../../data/dummy'
import { actionType } from '../../store/reducer';
const Stacked = () => {
  const dispatch = useDispatch();
  const { stackedChart } = useSelector(state => state.stateReducer)
  useEffect(() => {
    dispatch({
      type: actionType.SET_STACKED_CHART,
      stackedChart: [...stackedChartData]
    })
  }, [stackedChartData])
  return (
    <div>
      <div className='grid grid-cols-7 gap-2 w-72 h-5/6 rounded-lg items-end relative overflow-y-hidden z-0'>
        {stackedChart.map((stacked) => (
          <div className={`w-8 my-6 rounded-t-sm bg-slate-400 hover:bg-black hover:ease-in hover:duration-300`} style={{ height: stacked.y }}>
            <p className=' text-slate-200 text-xs absolute top-0'>{stacked.y}</p>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-7 gap-2 h-0 items-end'>
        {stackedChart.map((day) => (
          <p>{day.x}</p>
        ))}
      </div>
    </div>

  )
}

export default Stacked