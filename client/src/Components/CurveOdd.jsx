import React from 'react'

export default function CurveOdd({title,updateOdd}) {
  return (
    <div className='w-20 h-auto bg-green-00 flex flex-col items-center justify-center mr-[15rem]'>
    <div className='h-5 border-l border-line w-0'></div>
   <div className='w-[78px] h-[30px] font-semibold rounded-md border border-sub-border flex items-center justify-center text-sm'>
    {title}
   </div>
   <div className='curve-container'>
   <div className='curve3 border border-line bg-red-10'></div>
   <div className=' bg-white absolute top-[3.12rem] left-32 w-[50px] h-[36px] border border-sub-border rounded-lg flex items-center justify-center text-custom-blue text-2xl z-20 cursor-pointer' onClick={updateOdd}>+

   </div>
   <div className='curve4 border border-line bg-red-00'></div>
   </div>
  </div>
  )
}
