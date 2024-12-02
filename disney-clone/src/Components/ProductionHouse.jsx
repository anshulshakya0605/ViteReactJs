import React from 'react'
import { assets, videos } from '../assets/assets'
function ProductionHouse() {

    const ProductionHouseList = [
        {
            id:1,
            image:assets.disney1,
            video:videos.disneyV
        },
        {
            id:2,
            image:assets.pixar,
            video:videos.pixarV
        },
        {
            id:3,
            image:assets.marvel,
            video:videos.marvelV
        },
        {
            id:4,
            image:assets.starwar,
            video:videos.starWarV
        },
        {
            id:5,
            image:assets.nationalG,
            video:videos.nationalV
        },
    ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 md:px-16'>
      {ProductionHouseList.map((item) => (
       <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
        
        <video key={item.id} src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'></video>
        
         <img key={item.id} src={item.image} className='w-full z-[1] opacity-100' alt="" />
       </div>
      ))}
    </div>
  )
}

export default ProductionHouse;
