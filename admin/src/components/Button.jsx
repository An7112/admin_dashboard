import React from 'react'
import { motion } from 'framer-motion'
const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <motion.button whileTap={{scale:0.75}} type='button' style={{backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </motion.button>
  )
}

export default Button