import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='flex items-center gap-3 text-white text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8'>
      <Icon/>
      <h2> {name} </h2>
      
    </div>
  )
}

export default HeaderItem
