import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Navbar, Footer, Sidebar, ThemeSettings, Cart } from './components'
import Login from './pages/Chat/Login'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'
import { actionType } from './store/reducer'
import { motion } from 'framer-motion'
import ChatHome from './pages/Chat/ChatHome'
import Register from './pages/Chat/Register'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
const App = () => {
  const dispatch = useDispatch();
  const { currentColor, currentUser, themeSettings, currentMode, activeMenu, activeCart } = useSelector(state => state.stateReducer)
  const setThemeSettings = () => {
    dispatch({
      type: actionType.SET_THEME_SETTINGS,
      themeSettings: true
    })
  }
  const ProtectedRoute = ({ children }) => {
    if (currentUser.length === 0) {
      return <Navigate to="/login" />;
    }
    return children
  };
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <motion.button
              whileTap={{ scale: 0.75 }}
              type="button"
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              onClick={setThemeSettings}
            >
              <FiSettings />
            </motion.button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-20" style={{ transition: 'all 0.5s ease' }}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg z-20" style={{ transition: 'all 0.5s ease' }}>
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full z-10">
              <Navbar />
            </div>
            {/*  */}
            <Cart />
            {/*  */}
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={(<Ecommerce />)}/>
                <Route path="/ecommerce" element={(<Ecommerce />)} />
                <Route path="/chat" element={(<ProtectedRoute><ChatHome/></ProtectedRoute>)} />
                <Route path="/register" element={(<Register/>)} />
                <Route path="/login" element={(<Login/>)} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App