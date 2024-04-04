import React from 'react'

function Appbar({title}) {
  return (
    <div className='flex w-full justify-between p-3 bg-gray-300'>


    <div className=' text-lg font-bold' >{title}</div>

    <div className='flex gap-3 items-center' >
        <p className='font-semibold text-md'>Huzaifa</p>
    <img className='w-[30px] h-[30px] rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPE_KDUe1jJQt4I6djJMbUGiRwdf6lJomSpD1-ytLSA&s" />
    
    </div>
    </div>
  )
}

export default Appbar