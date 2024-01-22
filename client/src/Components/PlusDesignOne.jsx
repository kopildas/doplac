import React from 'react';

export default function PlusDesignOne({ onClick }) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='h-5 border-l border-zinc-300 w-0'></div>
      <div onClick={onClick} className='w-12 h-[33px] border rounded-md flex items-center justify-center text-blue-400 text-xl'>+</div>
      <div className='h-5 border-l border-zinc-300 w-0'></div>
    </div>
  );
}
