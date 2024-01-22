import React from 'react'

export default function CurveEven({title,updateEven}) {
  
  return (
    <div className={`w-20 h-auto bg-green-00 flex flex-col items-center justify-center ml-[15rem]`} >
              <div className='h-5 border-l border-zinc-300 w-0'></div>
             <div className='w-24 h-10 font-semibold rounded-xl border border-zinc-200 flex items-center justify-center'>
              {title}
             </div>
             <div className='curve-container'>
             <div className='curve border border-zinc-200 bg-red-00'></div>
             <div className=' bg-white absolute top-[3.12rem] left-5 w-14 h-[38px] border rounded-lg flex items-center justify-center text-blue-400 text-2xl z-20' onClick={updateEven}>+

             </div>
             <div className='curve2 border border-zinc-200 bg-red-00'></div>
             </div>
            </div>
  )
}
