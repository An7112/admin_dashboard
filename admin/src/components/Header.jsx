import React,{memo} from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Header = memo(({category, title}) => {
  const {currentMode} = useStateContext()
  return (
    <div className='mb-10'>
      <p className={currentMode === 'Dark' ? 'text-gray-200' : 'text-gray-400'}>
        {category}
      </p>
      <p className={`${currentMode === 'Dark' ? 'text-slate-400' : 'text-slate-900'} text-3xl font-extrabold tracking-tight `}>
        {title}
      </p>
    </div>
  )
})

export default Header