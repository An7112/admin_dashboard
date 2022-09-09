import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { themeColors } from '../data/dummy'
import { useDispatch, useSelector } from 'react-redux'
import { actionType } from '../store/reducer';
const ThemeSettings = () => {
  const dispatch = useDispatch();
  const {currentColor, currentMode, themeSettings} = useSelector(state => state.stateReducer)
  const setMode = (e) => {
    dispatch({
      type: actionType.SET_CURRENT_MODE,
      currentMode: e.target.value
    })
    localStorage.setItem('themeMode', e.target.value)
    dispatch({
      type:actionType.SET_THEME_SETTINGS,
      themeSettings: false
    })
}
const setColor = (color) => {
  dispatch({
    type: actionType.SET_CURRENT_COLOR,
    currentColor: color
  })
  localStorage.setItem('colorMode', color)
  dispatch({
    type:actionType.SET_THEME_SETTINGS,
    themeSettings: false
  })
}
const setThemeSettings = () => {
  dispatch({
    type: actionType.SET_THEME_SETTINGS,
    themeSettings: false
  })
}
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0 z-30'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Settings
          </p>
          <button type='button' onClick={setThemeSettings} className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray' style={{ color: 'rgb(153,171,180', borderRadius: '50%' }}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>
          <div className='mt-4'>
            <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer" onChange={setMode} checked={currentMode === 'Light'} />
            <lable htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </lable>
          </div>
          <div className='mt-4'>
            <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onChange={setMode} checked={currentMode === 'Dark'} />
            <lable htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </lable>
          </div>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <div key={index}>
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button style="button" className="h-10 w-10 rounded-full cursor-pointer" style={{backgroundColor:item.color}} onClick={() => setColor(item.color)}>
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings