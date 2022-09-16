import React, {memo, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.'
import {useSelector, useDispatch} from 'react-redux'
import { actionType } from '../store/reducer';
import { motion } from 'framer-motion';
const NavButton = memo(({ title, customFunc, icon, color, dotColor }) => (
    <motion.button
      whileHover={{scale:1.1}}
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </motion.button>
));

const Navbar = () => {
  const dispatch = useDispatch();
  const {currentColor, screenSize, activeMenu, activeCart} = useSelector(state => state.stateReducer)
  useEffect(() => {
    const handleResize = () => dispatch({
      type: actionType.SET_SCREEN_SIZE,
      screenSize: window.innerWidth
    });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch({
        type:actionType.SET_ACTIVE_MENU,
        activeMenu: false
      })
    }else if(screenSize <= 1200){
      dispatch({
        type: actionType.SET_ACTIVE_CHATS,
        chatsActive: false
      })
    }else {
      dispatch({
        type:actionType.SET_ACTIVE_MENU,
        activeMenu: true
      })
      dispatch({
        type: actionType.SET_ACTIVE_CHATS,
        chatsActive: true
      })
    }
  }, [screenSize]);

  const handleActiveMenu = () => dispatch({
    type: actionType.SET_ACTIVE_MENU,
    activeMenu: !activeMenu
  });
  const changeActiveCart = () => {
    dispatch({
      type: actionType.SET_ACTIVE_CART,
      activeCart: !activeCart
    })
  }

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" color={currentColor} icon={<FiShoppingCart />} customFunc={() => changeActiveCart()}/>
        <NavButton title="Chat" dotColor="#03C9D7" color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" color={currentColor} icon={<RiNotification3Line />} />
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                An
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>

        {/* {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)} */}
      </div>
    </div>
  );
};

export default Navbar;