import React from 'react'

function Pageination({handlePrev, handleNext, page}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev} className='px-8'><i className="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{page}</div>
        <div onClick={handleNext} className='px-8'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pageination