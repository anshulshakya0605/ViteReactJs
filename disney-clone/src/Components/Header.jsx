import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {

  const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
          name:'ORIGINALS',
          icon:HiStar
        },
        {
          name:'MOVIES',
          icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
      <img src={assets.disney} className='w-[80px] md:w-[115px]' alt="logo" />
        <div className='hidden md:flex gap-8 items-center'>
        { menu.map((item, index) => (
          <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
        </div>
        <div className='flex md:hidden gap-5 items-center'>
        { menu.map((item, index) => index < 3 &&(
          <HeaderItem key={index} name={""} Icon={item.icon} />
        ))}
        </div>
        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle ?
          <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 p-3 py-4'>
          {menu.map((item, index) => index > 2 && (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
          </div>
           : null}
        </div>
      </div>
      <img src={assets.user} className='w-[40px] rounded-full mr-4' alt="Avatar" />
    </div>
  )
}

export default Header
